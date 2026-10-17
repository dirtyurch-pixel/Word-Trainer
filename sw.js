/* Keeps the app and its recordings and pictures on the device so it works offline. */
const CACHE = "word-trainer-v43";
const VOX = "word-trainer-voice-1";  /* Socrates' studio voice (vox-*): kept between app updates so it only downloads once. Change the number after rebuilding it with src-voice.py. */
const CORE = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"];
const MEDIA = ["wm-aesop-angry.webp", "wm-aesop-base.webp", "wm-aesop-excited.webp", "wm-aesop-idle.webp", "wm-aesop-lose.webp", "wm-aesop-right.webp", "wm-aesop-sweat.webp", "wm-aesop-win.webp", "wm-aesop-wrong.webp", "wm-aristotle-angry.webp", "wm-aristotle-excited.webp", "wm-aristotle-idle.webp", "wm-aristotle-lose.webp", "wm-aristotle-right.webp", "wm-aristotle-sweat.webp", "wm-aristotle-win.webp", "wm-aristotle-wrong.webp", "wm-dee-angry.webp", "wm-dee-excited.webp", "wm-dee-idle.webp", "wm-dee-lose.webp", "wm-dee-right.webp", "wm-dee-sweat.webp", "wm-dee-win.webp", "wm-dee-wrong.webp", "wm-galen-angry.webp", "wm-galen-excited.webp", "wm-galen-idle.webp", "wm-galen-lose.webp", "wm-galen-right.webp", "wm-galen-sweat.webp", "wm-galen-win.webp", "wm-galen-wrong.webp", "wm-herodotus-angry.webp", "wm-herodotus-excited.webp", "wm-herodotus-idle.webp", "wm-herodotus-lose.webp", "wm-herodotus-right.webp", "wm-herodotus-sweat.webp", "wm-herodotus-win.webp", "wm-herodotus-wrong.webp", "wm-hypatia-angry.webp", "wm-hypatia-excited.webp", "wm-hypatia-idle.webp", "wm-hypatia-lose.webp", "wm-hypatia-right.webp", "wm-hypatia-sweat.webp", "wm-hypatia-win.webp", "wm-hypatia-wrong.webp", "wm-ibnkhaldun-angry.webp", "wm-ibnkhaldun-excited.webp", "wm-ibnkhaldun-idle.webp", "wm-ibnkhaldun-lose.webp", "wm-ibnkhaldun-right.webp", "wm-ibnkhaldun-sweat.webp", "wm-ibnkhaldun-win.webp", "wm-ibnkhaldun-wrong.webp", "wm-podium.webp", "wm-socrates-applaud.webp", "wm-socrates-ask.webp", "wm-socrates-base.webp", "wm-socrates-correct.webp", "wm-socrates-curious.webp", "wm-socrates-no.webp", "wm-socrates-point.webp", "wm-socrates-sigh.webp", "wm-socrates-trophy.webp", "wm-stage-dark.jpg", "wm-stage.jpg", "wm-you-angry.webp", "wm-you-excited.webp", "wm-you-idle.webp", "wm-you-lose.webp", "wm-you-right.webp", "wm-you-sweat.webp", "wm-you-win.webp", "wm-you-wrong.webp"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE.map(u => new Request(u, {cache:"reload"})))).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== VOX).map(k => caches.delete(k)))).then(() => self.clients.claim()));
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
  if (/\/vox-(?!worker)[^/]+$/.test(new URL(r.url).pathname)){
    e.respondWith(caches.open(VOX).then(c => c.match(r, {ignoreSearch:true}).then(hit => hit || fetch(r).then(res => { if (res && res.ok) c.put(r, res.clone()).catch(() => {}); return res; }))).catch(() => fetch(r)));
    return;
  }
  e.respondWith(caches.match(r, {ignoreSearch:true}).then(hit => hit || fetch(r).then(res => { if (res && res.ok){ const c = res.clone(); caches.open(CACHE).then(x => x.put(r, c)).catch(() => {}); } return res; })).catch(() => fetch(r)));
});
