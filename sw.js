/* Mi Colombia — service worker (hors ligne) */
var CACHE = 'micolombia-v2.2.0';
var FILES = ['./', 'index.html', 'styles.css', 'manifest.webmanifest',
  'data/lexique.js', 'data/verbes.js', 'data/paliers1.js', 'data/paliers2.js', 'data/dialogues.js', 'data/conversations1.js', 'data/conversations2.js',
  'js/core.js', 'js/screens.js', 'js/session.js', 'js/parler.js', 'js/main.js',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/maskable-512.png', 'icons/apple-touch-icon.png',
  'images/splash.webp', 'images/banner.webp', 'images/girl.webp', 'images/fort.webp', 'images/fleurs.webp'];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE && k.indexOf('micolombia-') === 0; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  if (url.hostname.indexOf('mymemory') >= 0) return; // traduction : toujours en ligne
  if (url.hostname.indexOf('fonts.g') === 0) {
    e.respondWith(caches.open('micolombia-fonts').then(function (c) {
      return c.match(e.request).then(function (hit) {
        return hit || fetch(e.request).then(function (r) { c.put(e.request, r.clone()); return r; });
      });
    }));
    return;
  }
  if (url.origin !== location.origin) return;
  // réseau d'abord (pour recevoir les mises à jour), cache si hors ligne
  e.respondWith(fetch(e.request, { cache: 'no-cache' }).then(function (r) {
    if (r && r.ok) { var copy = r.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, copy); }); }
    return r;
  }).catch(function () {
    return caches.match(e.request, { ignoreSearch: true }).then(function (hit) { return hit || caches.match('index.html'); });
  }));
});
