/* Keeps the app and its recordings and pictures on the device so it works offline. */
const CACHE = "word-trainer-v30";
const CORE = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"];
const MEDIA = ["wm-aesop-angry.webp", "wm-aesop-base.webp", "wm-aesop-excited.webp", "wm-aesop-idle.webp", "wm-aesop-lose.webp", "wm-aesop-right.webp", "wm-aesop-sweat.webp", "wm-aesop-win.webp", "wm-aesop-wrong.webp", "wm-aristotle-angry.webp", "wm-aristotle-excited.webp", "wm-aristotle-idle.webp", "wm-aristotle-lose.webp", "wm-aristotle-right.webp", "wm-aristotle-sweat.webp", "wm-aristotle-win.webp", "wm-aristotle-wrong.webp", "wm-hypatia-angry.webp", "wm-hypatia-excited.webp", "wm-hypatia-idle.webp", "wm-hypatia-lose.webp", "wm-hypatia-right.webp", "wm-hypatia-sweat.webp", "wm-hypatia-win.webp", "wm-hypatia-wrong.webp", "wm-podium.webp", "wm-socrates-applaud.webp", "wm-socrates-ask.webp", "wm-socrates-base.webp", "wm-socrates-correct.webp", "wm-socrates-curious.webp", "wm-socrates-no.webp", "wm-socrates-point.webp", "wm-socrates-sigh.webp", "wm-socrates-trophy.webp", "wm-stage-dark.jpg", "wm-stage.jpg", "wm-you-angry.webp", "wm-you-excited.webp", "wm-you-idle.webp", "wm-you-lose.webp", "wm-you-right.webp", "wm-you-sweat.webp", "wm-you-win.webp", "wm-you-wrong.webp"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE.map(u => new Request(u, {cache:"reload"})))).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
  caches.open(CACHE).then(async c => { for (const m of MEDIA){ try { if (!(await c.match(m))) await c.add(m); } catch(err){} } });
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.match(e.request, {ignoreSearch:true}).then(hit => {
    const net = fetch(e.request.mode === "navigate" ? new Request(e.request.url, {cache:"no-store"}) : e.request).then(res => { if (res && (res.ok || res.type === "opaque")) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); } return res; });
    return hit ? (e.request.mode === "navigate" ? net.catch(() => hit) : hit) : net;
  }));
});
