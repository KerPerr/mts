export const createNpcAnims = (anims: Phaser.Animations.AnimationManager, texture: string) => {

    /**
     * BUILD ANIMATIONS FOR NPC[0-7]_{DOWN, LEFT, RIGHT, UP}
     */
    const FRAME_RATE = 5

    let index = 0
    let row = 0
    let rows = [ 'DOWN', 'LEFT', 'RIGHT', 'UP' ]
    for(let i=0;i<96;i+=3) {
        if(row === 4) { row = 0 }
        if( index === 8) { index = 0; row++ }

        anims.create({
            key: `NPC[${index}]_${rows[row]}`,
            frames: anims.generateFrameNumbers(texture, {
                start: i,
                end: i+2
            }),
            frameRate: FRAME_RATE,
            repeat: -1
        })
        index++
    }
}