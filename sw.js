const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/ui.js',
    '/css/style.css',
    '/img/oldComputer.png'
]

//install service worker
self.addEventListener('install', evt => {
    //console.log('installed', evt);
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            cache.addAll(assets);
        })
    )
});

//activate event

self.addEventListener('activate', evt => {
    //console.log('activated', evt);
});

//fetch events

self.addEventListener('fetch', evt => {
    //console.log('fetch', evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            console.log(cacheRes);
            return cacheRes || fetch(evt.request);
        })
    )
});