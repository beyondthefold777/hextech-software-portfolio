const CACHE = "hextech-v4-final";
self.addEventListener("install", (e) => { self.skipWaiting(); });
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", (e) => {
  if (e.request.mode === "navigate") { e.respondWith(fetch(e.request)); return; }
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});