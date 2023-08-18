// Get our elements

const player = document.querySelector('.player')
const video = document.querySelector('.viewer')
const progress = document.querySelector('.progress')
const progressBar = document.querySelector('.progress__filled')
const toggle = document.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider')


// Build out functions
function togglePlay() {
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
}

function iconChange() {
    if (video.paused) {
        toggle.textContent = '►'
    } else {
        toggle.textContent = '❚ ❚'
    }
}

function rollsInto() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip)
}
function handleRangeUpdate() {
    video[this.name] = this.value
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrubTime
}


// Hook up the event listeners
video.addEventListener('click', togglePlay)
toggle.addEventListener('click', togglePlay)
video.addEventListener('play', iconChange)
video.addEventListener('pause', iconChange)
video.addEventListener('timeupdate', rollsInto)
skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))


let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => {
    if (mousedown) {
        scrub(e)
    }
});
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
