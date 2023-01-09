function formatTime(time) {
    if (time < 10) {
        time = "0" + time
    }
    return time
}

function formatHours(time) {
    if (time > 12) {
        time = time - 12
    }
    return time
}

function formatCalendarDay(day) {
    if (day === 0) return "Sun"
    if (day === 1) return "Mon"
    if (day === 2) return "Tue"
    if (day === 3) return "Wed"
    if (day === 4) return "Thu"
    if (day === 5) return "Fri"
    if (day === 6) return "Sat"
}

function formatCalendarMonth(month) {
    if (month === 0) return "Jan"
    if (month === 1) return "Feb"
    if (month === 2) return "Mar"
    if (month === 3) return "Apr"
    if (month === 4) return "May"
    if (month === 5) return "Jun"
    if (month === 6) return "Jul"
    if (month === 7) return "Aug"
    if (month === 8) return "Sep"
    if (month === 9) return "Oct"
    if (month === 10) return "Nov"
    if (month === 11) return "Dec"
}

function setDate() {
    const secondHand = document.querySelector(".second-hand")
    const minsHand = document.querySelector(".min-hand")
    const hourHand = document.querySelector(".hour-hand")
    // const digital = document.querySelector("#digital")
    const digitalSec = document.querySelector("#digital-sec")
    const digitalMin = document.querySelector("#digital-min")
    const digitalHour = document.querySelector("#digital-hour")
    const now = new Date()

    const seconds = now.getSeconds()
    const secondsDegrees = (seconds / 60) * 360 - 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const mins = now.getMinutes()
    const minsDegrees = (mins / 60) * 360 - 90
    minsHand.style.transform = `rotate(${minsDegrees}deg)`

    const hours = now.getHours()
    const hoursDegrees = (hours / 12) * 360 - 90
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`

    // digital.textContent = (`${hours} : ${mins} : ${seconds}`)
    digitalHour.textContent = formatTime(formatHours(hours))
    digitalMin.textContent = formatTime(mins)
    digitalSec.textContent = formatTime(seconds)

    setCalendarDate()
}

function setCalendarDate() {
    const now = new Date()
    const day = now.getDay()
    const month = now.getMonth()
    const date = now.getDate()
    const year = now.getFullYear()

    const screenDay = document.querySelector("#weekday")
    const screenMonth = document.querySelector("#month")
    const screenDate = document.querySelector("#day")
    const screenYear = document.querySelector("#year")

    screenDay.textContent = formatCalendarDay(day)
    screenMonth.textContent = formatCalendarMonth(month)
    screenDate.textContent = formatTime(date)
    screenYear.textContent = year

    // console.log(`Day: ${day} Month: ${month} Date: ${date} Year: ${year}`)
}

setInterval(setDate, 1000) // 1000 milliseconds = 1 second

// secondsDegrees: seconds/60 gives us the fraction or percentage out of 60
// multipilying it by 360 gives us the number out of the whole (which is the angle, in this case)
// adding 90 offsets our having rotated the .hand divs by 90 degrees to go from right-to-left to up-down

// changed from "+ 90" to "- 90" because in the CSS, we removed the "transform: rotate(90deg)"
// this is because we changed the "transform-origin" from "100%" to "0 50%" so that it renders from the left
// we did that so hands can have different lengths w/o affecting the shape of the div
// see: https://www.reddit.com/r/javascript/comments/6sv1ks/question_regarding_the_clock_lesson_in_js30/

// minsDegrees uses the same formula as secondsDegrees. it increments more slowly

// hoursDegrees divides by 12 instead of 60