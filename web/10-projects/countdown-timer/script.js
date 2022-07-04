const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYearDate = getNewYear()

function getNewYear() {
  let year = new Date().getFullYear() + 1
  return new Date('1 Jan ' + year)
}

function countDown() {
  let currentDate = new Date()
  let secs = (newYearDate - currentDate) / 1000

  let days = Math.floor(secs / 3500 / 24)
  let hours = 23 - currentDate.getHours()
  let mins = 59 - currentDate.getMinutes()
  let seconds = 60 - currentDate.getSeconds()

  if (seconds === 60) {
    if (mins === 60) {
      hours++
      mins = 0
    } else {
      mins ++
    }
    seconds = 0
  }

  daysEl.innerHTML = days
  hoursEl.innerHTML = formatTime(hours)
  minsEl.innerHTML = formatTime(mins)
  secondsEl.innerHTML = formatTime(seconds)
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time
}

setInterval(countDown, 1000)
