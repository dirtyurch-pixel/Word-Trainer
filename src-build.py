import json, re, os, shutil, glob
from PIL import Image, ImageDraw, ImageFont
# Run from the repo root: python3 src-build.py
# Builds index.html, sw.js, manifest and icons from src-word-trainer.html. Bumps the cache version automatically.
s=open('src-word-trainer.html').read()
def rep(a,b,n=1):
    global s
    assert s.count(a)==n,(s.count(a),a[:80]); s=s.replace(a,b)
# flat file layout for easy uploading
rep('fetch("d/a" + pad2(g) + ".mp3")','fetch("a" + pad2(g) + ".mp3")')
rep('background-image:url(d/i${pad2(w.d.g)}.jpg)','background-image:url(i${pad2(w.d.g)}.jpg)')
# start from the progress, words and pictures saved in the Claude version
rep('if (OFFLINE){\n  S = clean(OFFLINE.S);','const SEED = window.SEED_STATE || null;\nif (SEED){ try { if (!localStorage.getItem(LS)){ S = clean(SEED.S); for (const k in SEED.pics) if (!localStorage.getItem(PLS + k)) pics[k] = SEED.pics[k]; } } catch(e){ S = clean(SEED.S); } }\nif (OFFLINE){\n  S = clean(OFFLINE.S);')
rep('<p class="note" id="save-note" hidden>Your progress is saved in this browser only.</p>','<p class="note" id="save-note" hidden>Your progress is saved on this device.</p>')
seedj=json.load(open('src-seed.json')); st=seedj['S']; pics=seedj['pics']
seed=json.dumps({'S':st,'pics':pics},ensure_ascii=False).replace('<','\\u003c')
title=re.search(r'<title>.*?</title>',s).group(0); s=s.replace(title,'',1)
head=f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">{title}
<meta name="theme-color" content="#0b6b60"><link rel="manifest" href="manifest.webmanifest"><link rel="icon" href="icon-192.png"><link rel="apple-touch-icon" href="icon-192.png">
<style>html{{color-scheme:light}}body{{margin:0;font-size:14px}}img{{max-width:100%}}[hidden]{{display:none!important}}:root{{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}}</style>
<script>window.SEED_STATE={seed};</script></head><body>'''
tail='''<script>if ("serviceWorker" in navigator) addEventListener("load", () => { navigator.serviceWorker.register("sw.js", {updateViaCache:"none"}).then(r => r.update()).catch(() => {}); let had = !!navigator.serviceWorker.controller, done = false; navigator.serviceWorker.addEventListener("controllerchange", () => { if (had && !done){ done = true; location.reload(); } had = true; }); });</script></body></html>'''
open('index.html','w').write(head+s+tail)
media=sorted(f for f in os.listdir('.') if f.startswith(('wm-','welcome-')))
# icons: the app's highlighted word mark
for size in (192,512):
    im=Image.new('RGB',(size,size),(11,107,96)); d=ImageDraw.Draw(im)
    try: font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf',int(size*.5))
    except Exception: font=ImageFont.load_default()
    t='Aa'; bb=d.textbbox((0,0),t,font=font); w,h=bb[2]-bb[0],bb[3]-bb[1]; x=(size-w)/2-bb[0]; y=(size-h)/2-bb[1]-size*.03
    d.rectangle([x-size*.04,y+h*.62+bb[1],x+w+size*.04,y+h*.95+bb[1]],fill=(255,226,77))
    d.text((x,y),t,font=font,fill=(255,255,255)); im.save(f'icon-{size}.png')
json.dump({"name":"Word Meaning Trainer","short_name":"Word Trainer","start_url":"./","scope":"./","display":"standalone","orientation":"any","background_color":"#eef2f0","theme_color":"#0b6b60","description":"Learn word meanings, Qur'anic vocabulary and Moroccan Arabic.","icons":[{"src":"icon-192.png","sizes":"192x192","type":"image/png","purpose":"any maskable"},{"src":"icon-512.png","sizes":"512x512","type":"image/png","purpose":"any maskable"}]},open('manifest.webmanifest','w'),indent=1)
try: VER=int(re.search(r'word-trainer-v(\d+)',open('sw.js').read()).group(1))+1
except Exception: VER=33
core=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png"]
sw='''/* Keeps the app and its recordings and pictures on the device so it works offline. */
const CACHE = "word-trainer-v%d";
const VOX = "word-trainer-voice-1";  /* Socrates' studio voice (vox-*): kept between app updates so it only downloads once. Change the number after rebuilding it with src-voice.py. */
const MUSIC = "word-trainer-music-1";  /* the music (music-*), kept between app updates too. Change the number if a track is replaced under the same name. */
const CORE = %s;
const MEDIA = %s;
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE.map(u => new Request(u, {cache:"reload"})))).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== VOX && k !== MUSIC).map(k => caches.delete(k)))).then(() => self.clients.claim()));
  caches.open(CACHE).then(async c => { for (const m of MEDIA){ try { if (!(await c.match(m))) await c.add(m); } catch(err){} } });
});
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== location.origin) return;
  if (r.mode === "navigate"){
    e.respondWith(fetch(new Request(r.url, {cache:"no-cache"}))
      .then(res => { if (!res || !res.ok) throw 0; const c = res.clone(); caches.open(CACHE).then(x => x.put("index.html", c)).catch(() => {}); return res.redirected ? new Response(res.body, {status:res.status, statusText:res.statusText, headers:res.headers}) : res; })
      .catch(() => caches.match("index.html").then(h => h || caches.match("./")).then(h => h || fetch(r))));
    return;
  }
  const keep = /\\/vox-(?!worker)[^/]+$/.test(new URL(r.url).pathname) ? VOX : /\\/music-[^/]+$/.test(new URL(r.url).pathname) ? MUSIC : "";
  if (keep){
    e.respondWith(caches.open(keep).then(c => c.match(r, {ignoreSearch:true}).then(hit => hit || fetch(r).then(res => { if (res && res.ok) c.put(r, res.clone()).catch(() => {}); return res; }))).catch(() => fetch(r)));
    return;
  }
  e.respondWith(caches.match(r, {ignoreSearch:true}).then(hit => hit || fetch(r).then(res => { if (res && res.ok){ const c = res.clone(); caches.open(CACHE).then(x => x.put(r, c)).catch(() => {}); } return res; })).catch(() => fetch(r)));
});
''' % (VER, json.dumps(core), json.dumps(media))
open('sw.js','w').write(sw)
print('built, cache version',VER)

