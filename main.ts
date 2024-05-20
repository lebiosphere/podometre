input.onButtonPressed(Button.A, function () {
    basic.showNumber(sauts)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Fabulous)
    basic.showNumber(max)
})
let max = 0
let sauts = 0
basic.showIcon(IconNames.Rabbit)
sauts = 0
let min = 10000
max = 0
basic.pause(200)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 2000) {
        sauts += 1
        basic.pause(150)
    }
    min = Math.min(min, input.acceleration(Dimension.Strength))
    max = Math.max(max, input.acceleration(Dimension.Strength))
})
