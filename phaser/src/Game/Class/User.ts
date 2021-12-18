import { createPlayerAnims } from "../Animation/PlayerAnims"

export default class User {

    protected _id: string
    protected _sprite: Phaser.GameObjects.Sprite

    public _isWalking: boolean = false
    public _direction: { [dir: string]: boolean } = { N: false, S: false, E: false, W: false }

    constructor(scene: Phaser.Scene, id: string, position: Phaser.Math.Vector2, texture: string) {
        this._id = id
        this._sprite = new Phaser.GameObjects.Sprite(scene, position.x, position.y, texture)
        createPlayerAnims(scene.anims, texture)
        scene.add.existing(this._sprite)
    }

    get id(): string { return this._id }
    get sprite(): Phaser.Physics.Arcade.Sprite | Phaser.GameObjects.Sprite { return this._sprite }

    animationHandler() {
        if (this._isWalking) {

            if (this._direction.N) {
                this._sprite.anims.play('player-up', true)
            } else if (this._direction.S) {
                this._sprite.anims.play('player-down', true)
            } else if (this._direction.W) {
                this._sprite.anims.play('player-left', true)
            } else if (this._direction.E) {
                this._sprite.anims.play('player-right',  true)
            }
        } else {
            this._sprite.anims.stop()

            if (this._direction.N) {
                this._sprite.setFrame(IDLE.UP)
            } else if (this._direction.S) {
                this._sprite.setFrame(IDLE.DOWN)
            } else if (this._direction.W) {
                this._sprite.setFrame(IDLE.LEFT)
            } else if (this._direction.E) {
                this._sprite.setFrame(IDLE.RIGHT)
            }
        }
    }

    destroy() {
        this._sprite.destroy()
    }

    update(t: number, dt: number) {
        this.animationHandler()
    }
}

enum IDLE { UP = 10, DOWN = 1, RIGHT = 7, LEFT = 4 }