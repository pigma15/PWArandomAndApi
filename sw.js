//install service worker

self.addEventListener('install', evt => {
    console.log('installed', evt);
})

//activate event

self.addEventListener('activate', evt => {
    console.log('activated', evt);
})

//fetch events

self.addEventListener('fetch', evt => {
    console.log('fetch', evt);
})