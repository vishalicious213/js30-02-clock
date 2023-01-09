# JavaScript and CSS Clock

From Wes Bos' [JavaScript30](https://javascript30.com/) exercises. Gets current time from JavaScript and updates the seconds, minutes and hours hands onscreen by applying a rotate to the given element (they're all div elements).

Customized & added on to project with the following:

- changed size of clock hands
    - transform-origins changed so hands rendered from left
    - removed transform rotations from css and calculated them using JavaScript
- changed colors of clock hands
- added digital clock at bottom
    - use same time values from analog clock
    - format each time element and render it
- added current date at bottom
    - get new date
    - separate into day, month, date, year elements
    - format each date element and render it
- new background

## JavaScript concepts
- functions
- Date()
    - getSeconds()
    - getMinutes()
    - getHours()
- element.style.transform()
    - rotate()
- setInterval()

## CSS concepts

- transform-origin
- transform: rotate()
- transition
- transition-timing-function: cubic-bezier()
- transform: translateY()

Deployed at: https://vish213-clock.netlify.app/