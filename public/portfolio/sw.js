self.addEventListener('fetch', function (event) {
    event.respondWith(caches.open('cache').then(function (cache) {
        return cache.match(event.request).then(function (response) {
            console.log("cache request: " + event.request.url);
            var fetchPromise = fetch(event.request).then(function (networkResponse) {
                // if we got a response from the cache, update the cache
                console.log("fetch completed: " + event.request.url, networkResponse);
                if (networkResponse) {
                    console.debug("updated cached page: " + event.request.url, networkResponse);
                    cache.put(event.request, networkResponse.clone());
                }
                return networkResponse;
            }, function (event) {
                // rejected promise - just ignore it, we're offline!
                console.log("Error in fetch()", event);
                event.waitUntil(
                    caches.open('cache').then(function (cache) {
                        return cache.addAll([
                            '/index.html',
                            '/index.html?homescreen=1',
                            '/?homescreen=1',
                            '/css/app.css',
                            '/js/app.js',
                            '/manifest.js',
                        ]);
                    })
                );
            });
            // respond from the cache, or the network
            return response || fetchPromise;
        });
    }));
});

self.addEventListener('install', function (event) {
    // The promise that skipWaiting() returns can be safely ignored.
    self.skipWaiting();
    console.log("Latest version installed!");
});