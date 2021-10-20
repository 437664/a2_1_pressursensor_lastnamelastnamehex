input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . . . .
        . # # . .
        . . # # #
        . . . # .
        . # # . .
        `)
    basic.showString("#")
    basic.showNumber(12)
    basic.showString("your my")
    basic.showString("#")
    basic.showNumber(1)
    basic.showString("FANE")
})
