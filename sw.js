const NAMA_CACHE = 'sunnah-app-v3';
const FILE_CACHE = [ './', './index.html', './style.css', './app.js', './manifest.json' ];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(NAMA_CACHE).then(cache => cache.addAll(FILE_CACHE)));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys.filter(key => key !== NAMA_CACHE).map(key => caches.delete(key)));
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
