const hand = document.querySelector('.hand')
const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')


const digitHour = document.querySelector('#hour')
const digitMin = document.querySelector('#min')
const digitSec = document.querySelector('#sec')



function setDate() {

    const now = new Date()
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds * 6) - 90)
    secondHand.style.transform = `rotate(${secondDegrees}deg)`



    const minutes = now.getMinutes();
    const minDegrees = ((minutes * 6) - 90)
    minHand.style.transform = `rotate(${minDegrees}deg)`


    const hours = now.getHours();
    const hourDegrees = ((hours * 30) - 90)
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
    console.log(`${hours}h ${minutes}m ${seconds}s`)


    digitHour.innerText = hours
    digitMin.innerText = minutes
    digitSec.innerText = seconds

}

const s = setInterval(setDate, 1000);
setDate()








