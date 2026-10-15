/* Keeps the app and its recordings and pictures on the device so it works offline. */
const CACHE = "word-trainer-v6";
const CORE = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"];
const MEDIA = [];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
  caches.open(CACHE).then(async c => { for (const m of MEDIA){ try { if (!(await c.match(m))) await c.add(m); } catch(err){} } });
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.match(e.request, {ignoreSearch:true}).then(hit => {
    const net = fetch(e.request).then(res => { if (res && (res.ok || res.type === "opaque")) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); } return res; });
    return hit ? (e.request.mode === "navigate" ? net.catch(() => hit) : hit) : net;
  }));
});
