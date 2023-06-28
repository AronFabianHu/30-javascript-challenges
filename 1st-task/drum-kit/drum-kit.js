function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const div = document.querySelector(`.drum[data-key="${e.keyCode}"]`)
    audio.cloneNode(true).play()
    div.classList.add('active')
}

function removeActive(e) {
    if (e.propertyName !== 'transform') return
    this.classList.remove('active')
}


const divs = document.querySelectorAll('.drum')
divs.forEach(div => div.addEventListener('transitionend', removeActive))
window.addEventListener('keydown', playSound)


// const audio1 = document.querySelector('#audio-1')
// const audio2 = document.querySelector('#audio-2')
// const audio3 = document.querySelector('#audio-3')
// const audio4 = document.querySelector('#audio-4')
// const audio5 = document.querySelector('#audio-5')
// const audio6 = document.querySelector('#audio-6')
// const audio7 = document.querySelector('#audio-7')
// const audio8 = document.querySelector('#audio-8')
// const audio9 = document.querySelector('#audio-9')


// const drum1 = document.querySelector('#drum-1')
// const drum2 = document.querySelector('#drum-2')
// const drum3 = document.querySelector('#drum-3')
// const drum4 = document.querySelector('#drum-4')
// const drum5 = document.querySelector('#drum-5')
// const drum6 = document.querySelector('#drum-6')
// const drum7 = document.querySelector('#drum-7')
// const drum8 = document.querySelector('#drum-8')
// const drum9 = document.querySelector('#drum-9')

// drum1.addEventListener('click', function () {
//     audio1.cloneNode(true).play()
// })
// drum2.addEventListener('click', function () {
//     audio2.cloneNode(true).play()
// })
// drum3.addEventListener('click', function () {
//     audio3.cloneNode(true).play()
// })
// drum4.addEventListener('click', function () {
//     audio4.cloneNode(true).play()
// })
// drum5.addEventListener('click', function () {
//     audio5.cloneNode(true).play()
// })
// drum6.addEventListener('click', function () {
//     audio6.cloneNode(true).play()
// })
// drum7.addEventListener('click', function () {
//     audio7.cloneNode(true).play()
// })
// drum8.addEventListener('click', function () {
//     audio8.cloneNode(true).play()
// })
// drum9.addEventListener('click', function () {
//     audio9.cloneNode(true).play()
// })

