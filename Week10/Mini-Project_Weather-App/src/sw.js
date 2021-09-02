self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return (
                response || fetch(e.request)
                // .then((res) => {
                //     if (!e.request.url.includes('/locations/v1')) return res

                //     return caches.open('requests').then((cache) => {
                //         cache.put(e.request, res.clone())
                //         return res
                //     })
                // })
            )
        })
    )
})
