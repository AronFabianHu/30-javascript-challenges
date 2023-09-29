const buttons = document.querySelectorAll('.timer__button')

const custom = document.querySelector('#custom')
const textInput = document.querySelector('[type="text"]')

const display = document.querySelector('.display')
const timeLeft = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')

let countdownInterval;
let customValue = 0

function startCountdown(seconds = 0) {
    // Get the number of minutes from the input field


    // Calculate the target time
    const targetDate = new Date().getTime() + (seconds / 60 + customValue) * 60 * 1000;

    // Update the countdown every second
    countdownInterval = setInterval(function () {
        const currentDate = new Date().getTime();
        const timeRemaining = targetDate - currentDate;

        // Calculate minutes and seconds
        const minutesRemaining = Math.floor((timeRemaining / 1000) / 60);
        const secondsRemaining = Math.floor((timeRemaining / 1000) % 60);

        // Display the countdown

        timeLeft.innerHTML = `
        
            ${minutesRemaining}:${secondsRemaining}
        `;


        endTime.innerHTML = `It expires: ${new Date(targetDate).toLocaleString()}`

        // Check if the countdown has reached zero
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



    }, 1000); // Update every 1000 milliseconds (1 second)
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
