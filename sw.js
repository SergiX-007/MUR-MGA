// Service worker ALEFA VE — stratégie network-first.
// Objectif : toujours servir la dernière version en ligne (évite l'écran cassé
// dû à un index.html/support.js périmé en cache), avec repli hors-ligne.
const CACHE = 'alefa-ve-v1';
const CORE = ['./', './index.html', './support.js', './manifest.json'];

self.addEventListener('install', (e) => {
  // allSettled : une ressource manquante ne fait pas échouer toute l'installation.
  e.waitUntil(caches.open(CACHE).then((c) => Promise.allSettled(CORE.map((u) => c.add(u)))));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    fetch(req)
      .then((res) => {
        // Met à jour le cache en arrière-plan pour les ressources same-origin.
        if (res && res.ok && new URL(req.url).origin === self.location.origin) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req))
  );
});
