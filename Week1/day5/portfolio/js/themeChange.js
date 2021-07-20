const themeChange = document.getElementById('theme-changer')

themeChange.addEventListener('click', () => {
  const el = document.documentElement
  el.setAttribute('data-theme', el.dataset['theme'] === 'light' ? 'dark' : 'light')
})
