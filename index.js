function setDate() {
    const secondHand = document.querySelector(".second-hand")
    const minsHand = document.querySelector(".min-hand")
    const hourHand = document.querySelector(".hour-hand")
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

    console.log(`${hours} : ${mins} : ${seconds}`)
}

setInterval(setDate, 1000); // 1000 milliseconds = 1 second

// secondsDegrees: seconds/60 gives us the fraction or percentage out of 60
// multipilying it by 360 gives us the number out of the whole (which is the angle, in this case)
// adding 90 offsets our having rotated the .hand divs by 90 degrees to go from right-to-left to up-down

// changed from "+ 90" to "- 90" because in the CSS, we removed the "transform: rotate(90deg)"
// this is because we changed the "transform-origin" from "100%" to "0 50%" so that it renders from the left
// we did that so hands can have different lengths w/o affecting the shape of the div
// see: https://www.reddit.com/r/javascript/comments/6sv1ks/question_regarding_the_clock_lesson_in_js30/

// minsDegrees uses the same formula as secondsDegrees. it increments more slowly

// hoursDegrees divides by 12 instead of 60