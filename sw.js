const NAMA_CACHE = 'sunnah-app-v2'; // Kita ubah ke v2
const FILE_CACHE = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json'
];

self.addEventListener('install', event => {
  // Langsung aktifkan service worker baru
  self.skipWaiting();
  event.waitUntil(
    caches.open(NAMA_CACHE).then(cache => {
      return cache.addAll(FILE_CACHE);
    })
  );
});

// Menghapus cache versi lama saat versi baru aktif
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== NAMA_CACHE).map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
