
export const createPlayerAnims = (anims: Phaser.Animations.AnimationManager, texture: string) => {

    const FRAME_RATE = 8

    anims.create({
        key: 'player-down',
        frames: anims.generateFrameNumbers(texture, {
            start: 0,
            end: 2
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })
    anims.create({
        key: 'player-left',
        frames: anims.generateFrameNumbers(texture, {
            start: 3,
            end: 5
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })
    anims.create({
        key: 'player-right',
        frames: anims.generateFrameNumbers(texture, {
            start: 6,
            end: 8
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })
    anims.create({
        key: 'player-up',
        frames: anims.generateFrameNumbers(texture, {
            start: 9,
            end: 11
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })
}