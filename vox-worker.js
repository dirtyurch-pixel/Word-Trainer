/* Socrates' voice (Piper "alan", free and offline once downloaded). Runs in the background so the game never stutters.
   Messages in:  {type:"load"}, {type:"say", id, text, len}, {type:"prep", text, len}, {type:"drop"}
   Messages out: {type:"progress", p}, {type:"ready"}, {type:"fail", err}, {type:"part", id, key, pcm, rate, first, last} (one per sentence; pcm null if cut short or failed) */
import * as ort from "./vox-ort.mjs";
import { createPiperPhonemize } from "./vox-phon.js";

const base = new URL("./", import.meta.url).href;
ort.env.wasm.numThreads = 1;
ort.env.wasm.wasmPaths = {mjs: base + "vox-ort-wasm.mjs", wasm: base + "vox-ort.wasm"};
let cfg, sess, phonWasm, phonData, loading = null;
const queue = [];
let busy = false, cur = null;

async function grab(url, onBytes){
  const r = await fetch(url); if (!r.ok) throw new Error(url + " " + r.status);
  if (!onBytes) return new Uint8Array(await r.arrayBuffer());
  const rd = r.body.getReader(), parts = [];
  for (;;){ const {done, value} = await rd.read(); if (done) break; parts.push(value); onBytes(value.length); }
  const out = new Uint8Array(parts.reduce((a, b) => a + b.length, 0)); let at = 0;
  for (const p of parts){ out.set(p, at); at += p.length; }
  return out;
}
function load(){
  return loading = loading || (async () => {
    cfg = await (await fetch(base + "vox-alan.json")).json();
    const total = cfg.bytes + 13e6; let got = 0, last = 0;
    const tick = n => { got += n; const p = Math.min(.99, got/total); if (p - last > .01){ last = p; postMessage({type:"progress", p}); } };
    [phonWasm, phonData] = await Promise.all([grab(base + "vox-phon.wasm"), grab(base + "vox-phon.data")]);
    const ortWasm = grab(base + "vox-ort.wasm", tick);
    const model = new Uint8Array(cfg.bytes); let at = 0;
    for (const p of cfg.parts){ const b = await grab(base + p, tick); model.set(b, at); at += b.length; }
    await ortWasm;
    sess = await ort.InferenceSession.create(model, {executionProviders:["wasm"]});
  })();
}
// text -> Piper's phoneme ids, using espeak-ng (a fresh copy each time, as it is built to run once)
function phonemes(text){
  return new Promise((ok, bad) => {
    let done = false;
    createPiperPhonemize({
      print: l => { if (done) return; try { const j = JSON.parse(l); done = true; ok(j.phoneme_ids); } catch(e){} },
      printErr: () => {},
      wasmBinary: phonWasm,
      getPreloadedPackage: () => phonData.buffer.slice(0),
      locateFile: f => base + (f.endsWith(".wasm") ? "vox-phon.wasm" : f.endsWith(".data") ? "vox-phon.data" : f)
    }).then(m => {
      m.callMain(["-l", cfg.espeak.voice, "--input", JSON.stringify([{text}]), "--espeak_data", "/espeak-ng-data"]);
      if (!done) bad(new Error("no phonemes"));
    }, bad);
  });
}
// each sentence separately, sent as soon as it's ready (a pause goes in front of every sentence after the first)
let latest = 0;
async function speak(m){
  const rate = cfg.audio.sample_rate, gap = Math.round(rate*.65);
  const ss = m.text.split(/(?<=[.!?])\s+/).map(x => x.trim()).filter(Boolean);
  for (let i = 0; i < ss.length; i++){
    if (m.id && m.id !== latest){ postMessage({type:"part", id:m.id, key:m.key, pcm:null, last:true, cut:true}); return; }
    const ids = await phonemes(ss[i]); let pcm = new Float32Array(0);
    if (ids && ids.length){
      const r = await sess.run({
        input: new ort.Tensor("int64", BigInt64Array.from(ids, BigInt), [1, ids.length]),
        input_lengths: new ort.Tensor("int64", BigInt64Array.from([BigInt(ids.length)]), [1]),
        scales: new ort.Tensor("float32", Float32Array.from([cfg.inference.noise_scale, m.len, cfg.inference.noise_w]), [3])
      });
      const d = r.output.data, lead = i ? gap : 0; pcm = new Float32Array(lead + d.length); pcm.set(d, lead);
    }
    postMessage({type:"part", id:m.id || 0, key:m.key, pcm, rate, first:!i, last:i === ss.length - 1}, [pcm.buffer]);
  }
  if (!ss.length) postMessage({type:"part", id:m.id || 0, key:m.key, pcm:new Float32Array(0), rate, first:true, last:true});
}
async function pump(){
  if (busy) return; busy = true;
  while (queue.length){
    const m = cur = queue.shift();
    try { await speak(m); } catch(e){ postMessage({type:"part", id:m.id || 0, key:m.key, pcm:null, last:true, err:String(e)}); }
  }
  busy = false; cur = null;
}
onmessage = async e => {
  const m = e.data;
  if (m.type === "load"){
    try { await load(); postMessage({type:"ready"}); } catch(err){ loading = null; postMessage({type:"fail", err:String(err)}); }
    return;
  }
  if (m.type === "drop"){ latest = 0; for (let i = queue.length - 1; i >= 0; i--) if (queue[i].id) queue.splice(i, 1); return; }
  m.key = m.len + "|" + m.text;
  if (m.type === "say"){
    latest = m.id;
    for (let i = queue.length - 1; i >= 0; i--) if (queue[i].id || queue[i].key === m.key) queue.splice(i, 1);
    if (cur && cur.key === m.key){ cur.id = m.id; return; }   // already being prepared: just carry on with it
    queue.unshift(m);
  }
  else if (!queue.some(q => q.key === m.key)) queue.push(m);
  try { await load(); } catch(err){ return; }
  pump();
};
