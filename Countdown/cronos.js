const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')

const nextday = new Date().getDay() + 1
const newday = new Date(`april 17 2026 00:00:00`)


const updateCountdown = () => {
    const currentTime = new Date()
    const difference = newday - currentTime
    const days = Math.floor(difference / 1000 /  60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 /60) %24
    const minutes = Math.floor(difference / 1000 / 60) %60
    const seconds = Math.floor(difference / 1000) %60

    secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
    minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
    hoursContainer.textContent = hours < 10 ? '0' + hours : hours
    daysContainer.textContent = days < 10 ? '0' + days : days
    
}
    
setInterval(updateCountdown, 1000)