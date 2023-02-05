let x = 0
basic.showIcon(IconNames.Happy)
TPBot.headlightColor(0xff00ff)
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, 60)
    if (TPBot.sonarJudge(TPBot.Sonarjudge.Less, 30)) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
        TPBot.stopCar()
        basic.pause(1000)
        TPBot.setTravelTime(TPBot.DriveDirection.Backward, 50, 1)
        TPBot.setTravelTime(TPBot.DriveDirection.Left, 50, 0.5)
        TPBot.headlightRGB(randint(0, 255), randint(0, 255), randint(0, 255))
        if (input.lightLevel() > 80) {
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
            TPBot.stopCar()
            basic.pause(5000)
        } else if (input.lightLevel() < 30) {
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.mysterious), SoundExpressionPlayMode.UntilDone)
            TPBot.stopCar()
            basic.pause(5000)
            TPBot.setTravelTime(TPBot.DriveDirection.Backward, 50, 1)
            TPBot.setTravelTime(TPBot.DriveDirection.Left, 50, 0.5)
            TPBot.headlightRGB(randint(0, 255), randint(0, 255), randint(0, 255))
        }
        if (TPBot.trackSide(TPBot.LineSide.Right, TPBot.LineState.White)) {
            TPBot.stopCar()
            basic.pause(5000)
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.soaring), SoundExpressionPlayMode.UntilDone)
        }
    }
})
