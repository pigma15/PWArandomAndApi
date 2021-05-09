const staticCacheName = 'site-static-v8';
const dynamicCacheName = 'site-dynamic-v6';
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/ui.js',
    '/css/style.css',
    '/img/oldComputer.png',
    '/pages/fallback.html'
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
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticCacheName && dynamicCacheName)
                .map(key => caches.delete(key))
            )
        })
    )
});

//fetch events

self.addEventListener('fetch', evt => {
    //console.log('fetch', evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(dynamicCacheName).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone());
                    return fetchRes;
                })
            });
        }).catch(() => {
            return caches.match('/pages/fallback.html');
        })
    )
});