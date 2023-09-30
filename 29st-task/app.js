const buttons = document.querySelectorAll('.timer__button')

const custom = document.querySelector('#custom')
const textInput = document.querySelector('[type="text"]')

const display = document.querySelector('.display')
const timeLeft = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')

let countdownInterval;
let customValue = 0





function startCountdown(seconds = 0) {

    const targetDate = new Date().getTime() + (seconds / 60 + customValue) * 60 * 1000;
    countdownInterval = setInterval(function () {
        const currentDate = new Date().getTime();
        const timeRemaining = targetDate - currentDate;
        const minutesRemaining = Math.floor((timeRemaining / 1000) / 60);
        const secondsRemaining = Math.floor((timeRemaining / 1000) % 60);


        timeLeft.innerHTML = `${minutesRemaining}:${secondsRemaining}`;
        endTime.innerHTML = `It expires: ${new Date(targetDate).toLocaleString()}`
        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            endTime.innerHTML = '<p>Countdown expired!</p>';
            timeLeft.innerHTML = `0:0`;
        }

        if (isNaN(customValue)) {
            clearInterval(countdownInterval);
            timeLeft.innerHTML = `0:0`;
            endTime.innerHTML = 'Please enter a valid duration in minutes.';
            textInput.value = ''
            customValue = 0
        }
    }, 1000);
}

custom.addEventListener('submit', (e) => {
    clearInterval(countdownInterval);
    customValue = parseInt(textInput.value);
    e.preventDefault()
    startCountdown()
})

function addTime() {
    clearInterval(countdownInterval)
    startCountdown(parseInt(this.dataset.time))
}

buttons.forEach((button) => {
    button.addEventListener('click', addTime)
});

