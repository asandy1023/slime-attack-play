// Offline support. The page and its manifest are network-first, so a new deploy shows up on the next online launch;
// hashed build assets and fonts are cache-first, since a changed file always gets a new URL.
const CACHE = 'slash-planet-v1';

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./', './manifest.webmanifest', './icons/icon-192.png'])).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

async function networkFirst(req) {
  const c = await caches.open(CACHE);
  try { const res = await fetch(req); if (res.ok) c.put(req, res.clone()); return res; }
  catch (err) { return (await c.match(req)) || (await c.match('./')) || Response.error(); }
}
async function cacheFirst(req) {
  const c = await caches.open(CACHE), hit = await c.match(req);
  if (hit) return hit;
  const res = await fetch(req); if (res.ok || res.type === 'opaque') c.put(req, res.clone()); return res;
}
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin) e.respondWith(req.mode === 'navigate' || url.pathname.endsWith('.webmanifest') ? networkFirst(req) : cacheFirst(req));
  else if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) e.respondWith(cacheFirst(req));
});
