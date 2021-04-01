radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    basic.pause(200)
    グーチョキパー = randint(0, 2)
    if (グーチョキパー == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (グーチョキパー == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    グループ += 1
    if (グループ > 9) {
        グループ = 1
    }
    radio.setGroup(グループ)
    basic.showString("" + (グループ))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.pause(200)
    グーチョキパー = randint(0, 2)
    if (グーチョキパー == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (グーチョキパー == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    radio.sendNumber(グーチョキパー)
})
let グーチョキパー = 0
let グループ = 0
グループ = 1
radio.setGroup(グループ)
basic.showString("" + (グループ))
