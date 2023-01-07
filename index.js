function setDate() {
    const secondHand = document.querySelector(".second-hand")
    const minsHand = document.querySelector(".min-hand")
    const hourHand = document.querySelector(".hour-hand")
    const now = new Date()

    const seconds = now.getSeconds()
    const secondsDegrees = (seconds / 60) * 360 + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const mins = now.getMinutes()
    const minsDegrees = (mins / 60) * 360 + 90
    minsHand.style.transform = `rotate(${minsDegrees}deg)`

    const hours = now.getHours()
    const hoursDegrees = (hours / 12) * 360 + 90
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`

    // console.log(seconds)
}

setInterval(setDate, 1000);

// secondsDegrees: seconds/60 gives us the fraction or percentage out of 60
// multipilying it by 360 gives us the number out of the whole (which is the angle, in this case)
// adding 90 offsets our having rotated the .hand divs by 90 degrees to go from right-to-left to up-down

// minsDegrees uses the same formula as secondsDegrees. it increments more slowly

// hoursDegrees divides by 12 instead of 60