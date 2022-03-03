serial.redirectToUSB()
basic.forever(function () {
    serial.writeLine("Hello, I am Microbit!")
    basic.pause(100)
})
