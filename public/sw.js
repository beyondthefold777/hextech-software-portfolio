const CACHE = "hextech-v2-black";
const ASSETS = ["/", "/work", "/facts", "/pricing", "/manifest.json"];

self.addEventListener("install", (e) => {
  self.skipWaiting(); // force new immediately
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => 
      Promise.all(keys.map(k => {
        if (k !== CACHE) {
          console.log("Deleting old cache", k);
          return caches.delete(k);
        }
      }))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  // Always fetch fresh HTML, cache only assets
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request).catch(() => caches.match("/")));
    return;
  }
  e.respondWith(
    caches.match(e.request).then((cached) => {
      return cached || fetch(e.request);
    })
  );
});