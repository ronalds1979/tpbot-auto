basic.showIcon(IconNames.Happy)
TPBot.headlightColor(0xff00ff)
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
basic.forever(function () {
    TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, 50)
    if (TPBot.sonarJudge(TPBot.Sonarjudge.Less, 15)) {
        TPBot.setTravelTime(TPBot.DriveDirection.Backward, 50, 1)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
        TPBot.setTravelTime(TPBot.DriveDirection.Left, 50, 0.5)
    }
})
