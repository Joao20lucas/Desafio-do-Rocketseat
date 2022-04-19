const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
//é o id entre os ()

const newday = new Date('2022-03-08')

const updateCountdown = () => {
    const currenttime = new Date()
    const difference = newday - currenttime
    const days = Math.floor(difference/1000 / 60 / 60 / 24)
    const hours = Math.floor(difference/1000 / 60 / 60) % 24
    const minutes = Math.floor(difference/1000 / 60 ) % 60
    const seconds = Math.floor(difference/1000) % 60



    secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
    minutesContainer = minutes < 10 ? '0' + minutes : minutes
    hoursContainer = hours < 10 ? '0' + hours : hours
    daysContainer = days < 10 ? '0' + days : days
}

setInterval(updateCountdown, 1000)