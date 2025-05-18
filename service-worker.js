const CACHE_NAME = "Flash Shorthand-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "static/obgeo-icon.png",
  "static/location.png",
  "static/pen.png",
  "static/index.2da1efab.css",
  "static/is/chunk-vendors.ec8a2d88.js",
  "static/js/index.baca0576.js",
  "static/js/pages-index-index.cb2c2841.js",
  "static/js/pages-history-history.2910577b.js",
  "static/js/pages-history-history~pages-index-index.d5f98b60.js",
  "static/_02d5c7ee-04b5-42d7-9341-fb9578a6e805.jfif",
  "static/customicons.css",
  "static/customicons.ttf",
  "static/index.2da1efab.css",
  "static/fonts/iconfont.css",
  "static/fonts/iconfont.ttf",
  "static/fonts/iconfont.woff",
  "static/fonts/iconfont.woff2",
];
self.addEventListener("install", function (event) {
  // 安装Service Worker时,缓存文件
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
