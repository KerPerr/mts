export const createEmoteAnims = (anims: Phaser.Animations.AnimationManager, texture: string) => {

    const FRAME_RATE = 8

    let index = 0
    for(let i=0;i<540;i+=3) {
        anims.create({
            key: `emote${index++}`,
            frames: anims.generateFrameNumbers('emotes', { frames: [i, i+1, i+2] }),
            frameRate: FRAME_RATE,
            repeat: -1
        })
    }

    /*

    anims.create({
        key: 'emote!',
        frames: anims.generateFrameNumbers(texture, {
            start: 0,
            end: 2
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'emote?',
        frames: anims.generateFrameNumbers(texture, {
            start: 3,
            end: 5
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'emote!?',
        frames: anims.generateFrameNumbers(texture, {
            start: 6,
            end: 8
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'emote"',
        frames: anims.generateFrameNumbers(texture, {
            start: 9,
            end: 11
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'music',
        frames: anims.generateFrameNumbers(texture, {
            start: 12,
            end: 14
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'stars',
        frames: anims.generateFrameNumbers(texture, {
            start: 15,
            end: 17
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'star',
        frames: anims.generateFrameNumbers(texture, {
            start: 18,
            end: 20
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'shootingStar',
        frames: anims.generateFrameNumbers(texture, {
            start: 21,
            end: 23
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heart',
        frames: anims.generateFrameNumbers(texture, {
            start: 24,
            end: 26
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })
///////////////////////////////////////////////////////////////////////////////////////////////////////
    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////


    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })
    /////////////////////////////////////////////////////////////////////////////////////////////


    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })
    //////////////////////////////////////////////////////////////////////////////////////////////////////


    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })

    anims.create({
        key: 'heartbreak',
        frames: anims.generateFrameNumbers(texture, {
            start: 27,
            end: 29
        }),
        frameRate: FRAME_RATE,
        repeat: -1
    })
    /////////////////////////////////////////////////////////////////////////////////////////
    */
}