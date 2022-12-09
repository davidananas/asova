input.onButtonPressed(Button.A, function () {
    cislo += 1
    basic.showNumber(cislo)
})
input.onButtonPressed(Button.AB, function () {
    while (cislo > 0) {
        basic.pause(1000)
        cislo += -1
        basic.showNumber(cislo)
    }
    while (cislo == 0) {
        basic.pause(100)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.pause(100)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.pause(100)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.pause(100)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    cislo += -1
    basic.showNumber(cislo)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
let cislo = 0
cislo = 0
