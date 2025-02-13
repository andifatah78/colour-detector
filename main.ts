input.onButtonPressed(Button.A, function () {
    turn_on = randint(1, 9)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.UntilDone)
    if (turn_on == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (turn_on == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else if (turn_on == 3) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (turn_on == 4) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (turn_on == 5) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (turn_on == 6) {
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    } else if (turn_on == 7) {
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    } else if (turn_on == 8) {
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    } else if (turn_on == 9) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
input.onButtonPressed(Button.B, function () {
    turn_on = 0
    basic.showIcon(IconNames.Yes)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.UntilDone)
})
let light_sensor = 0
let strip: neopixel.Strip = null
let turn_on = 0
basic.showIcon(IconNames.Yes)
turn_on = 0
strip = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
basic.forever(function () {
    light_sensor = smarthome.ReadLightIntensity(AnalogPin.P3)
    basic.showNumber(light_sensor)
    basic.pause(5000)
})
