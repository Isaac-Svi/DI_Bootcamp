const overlayBtns = document.querySelectorAll('.overlay button')
const sliders = document.querySelectorAll('.slider')
const sliderWindow = document.querySelector('.window')

for (const btn of overlayBtns) {
    btn.addEventListener('click', () => {
        sliderWindow.classList.toggle('active')
        sliders.forEach((slider) => {
            slider.classList.toggle('active')
        })
    })
}
