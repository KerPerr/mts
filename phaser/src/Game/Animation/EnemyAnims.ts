
export const createEnemyAnims = (id: number, anims: Phaser.Animations.AnimationManager, texture: string) => {

    const FRAME_RATE = 5

    anims.create({
        key: 'down_' + id,
        frames: anims.generateFrameNumbers(texture, {
            start: 0,
            end: 2
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'right_' + id,
        frames: anims.generateFrameNumbers(texture, {
            start: 3,
            end: 5
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'up_' + id,
        frames: anims.generateFrameNumbers(texture, {
            start: 6,
            end: 8
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'left_' + id,
        frames: anims.generateFrameNumbers(texture, {
            start: 9,
            end: 11
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })
}