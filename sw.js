const CACHE_NAME = "semantic-dev-v2";

const STATIC_ASSETS = [
    "./",
    "./index.html",
    "./css/style.css",
    "./js/script.js",
    "./manifest.webmanifest",
    "./img/html-semantico.jpg",
    "./img/icon.svg"
];

self.addEventListener("install", event => {

    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(cache => cache.addAll(STATIC_ASSETS))
    );

    self.skipWaiting();
});


self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys().then(keys => {

            return Promise.all(

                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))

            );

        })

    );

    self.clients.claim();
});


self.addEventListener("fetch", event => {

    if (event.request.method !== "GET") {
        return;
    }

    const url = new URL(event.request.url);

    if (url.origin !== self.location.origin) {
        return;
    }


    if (event.request.mode === "navigate") {

        event.respondWith(

            fetch(event.request)

                .then(response => {

                    const copy = response.clone();

                    caches
                        .open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, copy);
                        });

                    return response;

                })

                .catch(async () => {

                    return (
                        await caches.match(event.request)
                    ) || (
                        await caches.match("./index.html")
                    );

                })

        );

        return;
    }


    event.respondWith(

        caches.match(event.request)

            .then(cachedResponse => {

                const networkResponse = fetch(event.request)

                    .then(response => {

                        const copy = response.clone();

                        caches
                            .open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, copy);
                            });

                        return response;

                    })

                    .catch(() => cachedResponse);


                return cachedResponse || networkResponse;

            })

    );

});