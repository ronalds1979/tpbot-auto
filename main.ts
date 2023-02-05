basic.showIcon(IconNames.Happy)
TPBot.headlightColor(0xff00ff)
basic.forever(function () {
    TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, 60)
    if (TPBot.sonarJudge(TPBot.Sonarjudge.Less, 30)) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
        TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, 20)
    } else if (TPBot.sonarJudge(TPBot.Sonarjudge.Less, 15)) {
        TPBot.setTravelTime(TPBot.DriveDirection.Backward, 50, 1)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
        TPBot.headlightRGB(randint(0, 255), randint(0, 255), randint(0, 255))
        TPBot.setTravelTime(TPBot.DriveDirection.Left, 50, 0.5)
    }
})
