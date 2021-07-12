const btn = document.querySelector('button')

// Outputs to console
btn.addEventListener('click', () => {
    const geo = navigator.geolocation

    geo.getCurrentPosition(
        (x) => {
            const { latitude, longitude } = x.coords
            console.log(`Latitude: ${latitude}\nLongitude: ${longitude}`)
        },
        (x) => console.log(x)
    )
})
