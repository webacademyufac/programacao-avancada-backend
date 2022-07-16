const bars = document.getElementById('topbar-bars')
const div = document.getElementById('burger-menu')
const close = document.getElementById('close-menu')

bars.addEventListener('click', () => {
    div.classList.remove("d-none")
})

close.addEventListener('click', () => {
    div.classList.add('d-none')
})