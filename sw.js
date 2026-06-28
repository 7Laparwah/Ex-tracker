const CACHE_NAME = "wallet-cache-v1";

self.addEventListener('install', e => {
 e.waitUntil(
 caches.open(CACHE_NAME).then(cache =>
 cache.addAll([self.location.pathname.replace('sw.js','') + 'WALLET_FIXED_FINAL-2 (4)-1.html'])
 )
 );
});

self.addEventListener('fetch', e => {
 // Only handle our OWN page requests (same-origin GET).
 // Never touch Firebase / Google / any other domain — let those go straight to network.
 const url = new URL(e.request.url);
 if (url.origin !== self.location.origin || e.request.method !== 'GET') {
 return; // do nothing — browser handles it normally
 }
 e.respondWith(
 caches.match(e.request).then(res => res || fetch(e.request))
 );
});
