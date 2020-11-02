const secondsContainer = document.querySelector("#seconds")
const minutesContainer = document.querySelector("#minutes")
const hoursContainer = document.querySelector("#hours")
const daysContainer = document.querySelector("#days")
const yearContainer = document.querySelector("#year")
const loadingContainer = document.querySelector("#loading")
const countdownContainer = document.querySelector("#countdown")
const nextYear = new Date().getFullYear() +1
const newYearTime = new Date (`January 01 ${nextYear} 00:00:00`)
const gettimeunit = unit => unit < 10 ? "0" + unit : unit


const insertvalues = ({ days,hours,minutes,seconds}) =>
{    secondsContainer.textContent = gettimeunit(seconds)
    minutesContainer.textContent =  gettimeunit(minutes)
    hoursContainer.textContent =  gettimeunit(hours)
    daysContainer.textContent =  gettimeunit(days)
    yearContainer.textContent = nextYear
}

const uptadecount = () => 
{
    const currenttime = new Date ()
    const difference = newYearTime - currenttime
    const days = Math.floor(difference/1000/60/60/24)
    const hours = Math.floor(difference/1000/60/60)%24
    const minutes = Math.floor(difference/1000/60)%60
    const seconds = Math.floor(difference/1000)%60

    insertvalues({days,hours,minutes,seconds})

}

const handletimeout = ()=>{loadingContainer.remove()
countdownContainer.style.display = "flex"}
setTimeout (handletimeout, 1000)
setInterval(uptadecount, 1000)