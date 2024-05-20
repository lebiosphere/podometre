input.onButtonPressed(Button.A, function () {
    sauts = 0
    basic.pause(200)
})
let sauts = 0
basic.showIcon(IconNames.Rabbit)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 700) {
        sauts += 1
        basic.pause(150)
        basic.showNumber(sauts)
    }
})
