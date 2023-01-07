function setDate() {
    const secondHand = document.querySelector(".second-hand")
    const now = new Date()
    const seconds = now.getSeconds()
    // seconds/60 gives us the fraction or percentage out of 60
    // multipilying it by 360 gives us the number out of the whole (which is the angle, in this case)
    // adding 90 offsets our having rotated the .hand divs by 90 degrees to go from right-to-left to up-down
    const secondsDegrees = (seconds / 60) * 360 + 90

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    console.log(seconds)
}

setInterval(setDate, 1000);