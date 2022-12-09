input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    cislo += 1
    basic.showNumber(cislo - 1)
})
input.onButtonPressed(Button.AB, function () {
    while (cislo > 1) {
        basic.pause(1000)
        cislo += -1
        basic.showNumber(cislo - 1)
    }
    for (let index = 0; index < 4; index++) {
        basic.clearScreen()
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.pause(100)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.pause(100)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.pause(100)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    cislo += -1
    while (cislo == 0) {
        basic.clearScreen()
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    cislo += -1
    basic.showNumber(cislo - 1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    control.reset()
})
let cislo = 0
cislo = 1
