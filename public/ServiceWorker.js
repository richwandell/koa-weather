var CACHE_NAME = "koa-local-cache";
var urlsToCache = [
    '/skycons.js',
    'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
    'https://code.jquery.com/jquery-3.2.1.slim.min.js',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js',
    '/dist/App.js',
    '/dist/main.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((function(cache) {
                return cache.addAll(urlsToCache);
            }))
    )
});

self.addEventListener('fetch', function(event) {
    var request = event.request;
    if (event.request.url.match(/\/at\/[\w,]+$/i)) {
        request = "/";
    }

    var matchDone = function(response) {
        // Cache hit - return response
        if (response) {
            return response;
        }

        return fetch(event.request).then(
            function(response) {
                // Check if we received a valid response
                if(!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }

                // IMPORTANT: Clone the response. A response is a stream
                // and because we want the browser to consume the response
                // as well as the cache consuming the response, we need
                // to clone it so we have two streams.
                var responseToCache = response.clone();

                caches.open(CACHE_NAME)
                    .then(function(cache) {
                        cache.put(request, responseToCache);
                    });

                return response;
            }
        );
    };



    event.respondWith(
        caches.match(request)
            .then(matchDone)
    );
});

self.addEventListener('activate', event => {
    console.log('V1 now ready to handle fetches!');
});