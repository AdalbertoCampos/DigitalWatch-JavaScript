function showTime() {

const date = new Date()
let h = date.getHours()
let m = date.getMinutes()
let s = date.getSeconds()
const currentDate = date.toDateString()
const display1 = document.querySelector('.display1')
const display2 = document.querySelector('.display2')
let DayorNight = 'AM'

if (h === 0) {
    h = 12
}

if (h > 12) {
    h = h - 12
    DayorNight = 'PM'
}

h = (h < 10) ? '0' + h : h
m = (m < 10) ? '0' + m : m
s = (s < 10) ? '0' + s : s

let time = h + ':' + m + ':' + s + ' ' + DayorNight

display1.innerText = time
display2.innerText = currentDate

setTimeout(showTime, 1000)

}

showTime()