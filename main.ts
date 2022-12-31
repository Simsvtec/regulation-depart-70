let température_consigne = 67
let delta = 2
pins.digitalWritePin(DigitalPin.P0, 1)
pins.digitalWritePin(DigitalPin.P1, 1)
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
basic.pause(2000)
pins.digitalWritePin(DigitalPin.P0, 0)
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    `)
basic.pause(2000)
pins.digitalWritePin(DigitalPin.P0, 1)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . #
    `)
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P1, 0)
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
basic.pause(2000)
pins.digitalWritePin(DigitalPin.P1, 1)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . #
    `)
basic.pause(2000)
basic.forever(function () {
    while (dstemp.celsius(DigitalPin.P12) >= température_consigne + delta) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
    while (dstemp.celsius(DigitalPin.P12) <= température_consigne - delta) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
    while (dstemp.celsius(DigitalPin.P12) > 65 && dstemp.celsius(DigitalPin.P12) < 69) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showLeds(`
            # . . . #
            # # . # #
            # . # . #
            # . . . #
            # . . . #
            `)
    }
})
