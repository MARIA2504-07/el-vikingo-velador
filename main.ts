ControllerButtonEvent.Pressed.onEvent(controller.A, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f f . . . . . 
        . . . . . . f 9 9 9 9 f . . . . 
        . . . . . f 9 6 6 6 6 9 f . . . 
        . f f f f f f 6 6 6 f f . . . . 
        . f 2 2 2 2 2 2 8 8 5 . . . . . 
        . f f f f f f 6 6 6 f f . . . . 
        . . . . . f 9 6 6 6 6 9 f . . . 
        . . . . . . f 9 9 9 9 f . . . . 
        . . . . . . . f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, vikingo, 0, -50)
    vikingo.startEffect(effects.halo, 2000)
    projectile.follow(vela)
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Triangle,
    254,
    0,
    255,
    0,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), SoundExpressionPlayMode.UntilDone)
})
info.onCountdownEnd(function () {
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(true, effects.clouds)
    vela.destroy(effects.rings, 500)
})
let vela: Sprite = null
let projectile: Sprite = null
let vikingo: Sprite = null
scene.setBackgroundImage(assets.image`Fondo`)
vikingo = sprites.create(assets.image`Vikingo`, SpriteKind.Player)
controller.moveSprite(vikingo, 75, 75)
vikingo.setBounceOnWall(true)
vikingo.setPosition(78, 88)
music.magicWand.playUntilDone()
info.startCountdown(60)
forever(function () {
    music.playMelody("D F E G A F E C ", 110)
})
game.onUpdateInterval(500, function () {
    vela = sprites.create(img`
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 4 5 . . . . . . . 
        . . . . . 5 5 2 4 5 . . . . . . 
        . . . . . 5 4 2 4 5 . . . . . . 
        . . . . . 5 4 2 4 5 . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 d . . . . . 
        . . . . 1 1 1 1 1 1 d . . . . . 
        . . . . 1 1 1 1 1 d d . . . . . 
        . . . . 1 1 1 1 d d d . . . . . 
        . . . . d 1 1 d d d d . . . . . 
        . . . . d 1 d d d d d . . . . . 
        . . . . d d d d d d d . . . . . 
        . . . . d d d d d d d . . . . . 
        `, SpriteKind.Enemy)
    vela.setVelocity(40, 0)
    vela.setPosition(0, 21)
})
