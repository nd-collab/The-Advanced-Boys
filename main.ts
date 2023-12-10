controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f f f 
        . . . . . . . . . . . . . f f f 
        . . . . . . . . . . . . . 5 4 5 
        . . . . . . . . . . . . 5 4 5 . 
        . . . . . . . . . . . 5 4 5 . . 
        . . . . . . . . . . 5 4 5 . . . 
        . . . . . . . . . 5 4 5 . . . . 
        . . . . . . . . 5 4 5 . . . . . 
        . . . . . . . 5 4 5 . . . . . . 
        . . . . . 5 5 4 5 . . . . . . . 
        . . . . 5 5 4 5 . . . . . . . . 
        . . . . 5 5 5 . . . . . . . . . 
        `, Monkey, 0, -100)
    music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
})
info.onCountdownEnd(function () {
    if (info.score() == 20) {
        game.gameOver(true)
        game.setGameOverEffect(true, effects.splatter)
    } else {
        game.gameOver(false)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(Taco)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    info.changeScoreBy(-1)
    sprites.destroy(Monkey)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
let He_He: Sprite = null
let Taco: Sprite = null
let projectile: Sprite = null
let Monkey: Sprite = null
info.setLife(3)
info.startCountdown(100)
info.setScore(0)
scene.setBackgroundImage(sprites.background.forest2)
game.showLongText("HELP THE PLANET OF THE APES SURVIVE WITHOUT ANY DESTRUCTION", DialogLayout.Full)
Monkey = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . . . 
    c c c c c d d e e e f c . . . . 
    . f d d d d e e e f f . . . . . 
    . . f f f f f e e e e f . . . . 
    . . . . f f e e e e e e f . f f 
    . . . f e e f e e f e e f . e f 
    . . f e e f e e f e e e f . e f 
    . f b d f d b f b b f e f f e f 
    . f d d f d d f d d b e f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
animation.runImageAnimation(
Monkey,
[img`
    . . . . . . . f f f f f . . . . 
    . . . . . . f e e e e e f . . . 
    . . . . . f e e e d d d d f . . 
    . . . . f f e e d f d d f d c . 
    . . . f d d e e d f d d f d c . 
    . . . c d b e e d d d d e e d c 
    . . . c d b e e d d c d d d d c 
    . . . . c f e e e d d c c c c c 
    . . . . . f f e e e d d d d f . 
    . . . . f e e e e f f f f f . . 
    f f . f e e e e e e f f . . . . 
    f e . f e e f e e f e e f . . . 
    f e . f e e e f e e f e e f . . 
    f e f f e f b b f b d f d b f . 
    f f f f e b d d f d d f d d f . 
    . f f f f f f f f f f f f f . . 
    `,img`
    . . . . . . . f f f f f . . . . 
    . . . . . . f e e e e e f . . . 
    . . . . . f e e e d d d d f . . 
    . . . . f f e e d f d d f d c . 
    . . . f d d e e d f d d f d c . 
    . . . c d b e e d d d d e e d c 
    . . . c d b e e d d c d d d d c 
    . . . . c f e e e d d c c c c c 
    . . . . . f f e e e d d d d f . 
    . . . . f e e e f f e e e f . . 
    f f . f e e e e e f f f f f . . 
    f e . f e e f f e e f b d f . . 
    f e . f e e e f f e f d d f f . 
    f e f f e f b b e f f f f f f . 
    f f f f e b d d e e e f d d f . 
    . f f f f f f f f f f f f f . . 
    `,img`
    . . . . . . f f f f f . . . . . 
    . . . . . f e e e e e f . . . . 
    . . . . f e e d d d d d f . . . 
    . . . f f e d f f d d f f f . . 
    . . f d d e d d d d e e d d c . 
    . f f f d e d d c d d d d c c . 
    f d b f d e d d d c c c c d c . 
    f d d f f e e d d d d d d c . . 
    f f f e f f e e d d d d c . . . 
    . . f e e e f e e f f f . . . . 
    . f f f e e e e e e e f . . . . 
    . f e f f f e e e e e e f . . . 
    . f e f f f f f e e e e f f . . 
    . f e f f f b b f e e f d b f . 
    . f f f f b d d f e e f d d f . 
    . . f f f f f f f f f f f f f . 
    `,img`
    . . . . . . f f f f f . . . . . 
    . . . . . f e e e e e f . . . . 
    . . . . f e d d d d d d f . . . 
    . . . f f d f f d d f f d f . . 
    . . f d e d d d d e e d d d c . 
    . . f f e d d c d d d d c d c . 
    f f f f e d d d c c c c d d c . 
    f d b f f e d d d d d d d c . . 
    f d d f f f e e d d d d c . . . 
    f f f e e e f e e f f f . . . . 
    . f f f e e e e e e e f . . . . 
    . f e f f f e e e e e e f . . . 
    . f e f f f f f e e e e f f . . 
    . f e f f f b b f e e f d b f . 
    . f f f f b d d f f f f d d f . 
    . . f f f f f f f f f f f f f . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f f f f . . . . 
    . . . . . . f e e e e e f . . . 
    . . . . . f e e e d d d d f . . 
    . . . . f f e e d d d d d f . . 
    . . . f d d e e d f f d d d c . 
    . . . c d b e e d d d d e e d c 
    . . . c d b e e d d c d d f f c 
    . . . . f e e e f f f e f d d f 
    . . . . f f f f f e e e f d d f 
    . f f . f f e e e e e f f f f f 
    . f e . f f e e e f f e f f f . 
    . f e f f f b b f f e f d b f . 
    . f e f f b d d f e e f d d f . 
    . . f f f f f f f f f f f f f . 
    `,img`
    . . . . . . . f f f f f . . . . 
    . . . . . . f e e e e e f . . . 
    . . . . . f e e e d d d d f . . 
    . . . . f f e e d d f d d f . . 
    . . . f d d e e d d f d d d c . 
    . . . c d b e e d d d d e e d c 
    . . . c d b e e d d c d d d d c 
    . . . f c f e e d d d f f f f c 
    . . . . f e e e e f f f d b f . 
    . . . . f e e f f f e f d d f . 
    . f f . f f f e e e e f f f . . 
    . f e . f f e e e e f e e f . . 
    . f e f f f f f f f e e e f f . 
    . f e f f f b b f e e f d b f . 
    . f f f f b d d e e f f d d f . 
    . . f f f f f f f f f f f f f . 
    `],
5000,
true
)
animation.runMovementAnimation(
Monkey,
animation.animationPresets(animation.shake),
5000,
false
)
controller.moveSprite(Monkey)
Monkey.setPosition(76, 91)
Monkey.setStayInScreen(true)
Monkey.startEffect(effects.confetti)
game.onUpdateInterval(5000, function () {
    He_He = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . c a a a a . . . . . . 
        . . . . . a a f f b a . . . . . 
        . . . . c a b f f c b . . . . . 
        . . . . c b b b a f c b . . . . 
        . . . . c b a c a b b b . . . . 
        . . . . . b b f f a a c . . . . 
        . . . . . . a a b b c . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    He_He.setVelocity(50, 50)
    He_He.setPosition(85, 21)
    He_He.setBounceOnWall(true)
})
game.onUpdateInterval(5000, function () {
    Taco = sprites.create(img`
        . . . . . . . e e e e . . . . . 
        . . . . . e e 4 5 5 5 e e . . . 
        . . . . e 4 5 6 2 2 7 6 6 e . . 
        . . . e 5 6 6 7 2 2 6 4 4 4 e . 
        . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
        . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
        . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
        e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
        e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
        e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
        e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
        e 5 e c 5 4 5 4 5 5 5 e e . . . 
        e 5 e e 5 5 5 5 5 4 e . . . . . 
        4 5 4 e 5 5 5 5 e e . . . . . . 
        . 4 5 4 5 5 4 e . . . . . . . . 
        . . 4 4 e e e . . . . . . . . . 
        `, SpriteKind.Food)
    Taco.setBounceOnWall(true)
    Taco.setVelocity(50, 50)
    Taco.setPosition(108, 38)
})
