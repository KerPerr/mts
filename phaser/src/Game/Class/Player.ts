import { socket } from '../Helper'
import User from './User'

export default class Player extends User {

    private _keyConfig: {[key: string]: string} = {z: 'up', q: 'left', s: 'down', d: 'right'}
    private _keyState: {[key: string]: boolean} = {up: false, left: false, down: false, right: false}

    constructor(scene: Phaser.Scene, id: string, position: Phaser.Math.Vector2, texture: string) {
        super(scene, id, position, texture)
        
        scene.input.keyboard.on('keydown', (event: any) => {
            if(this._keyConfig[event.key]) {
                this._keyState[this._keyConfig[event.key]] = true
                socket.emit('keyPressed', this._keyState)
            }
        })
        
        scene.input.keyboard.on('keyup', (event: any) => {
            if(this._keyConfig[event.key]) {
                this._keyState[this._keyConfig[event.key]] = false
                socket.emit('keyReleased', this._keyState)
            }
        })
    }

    update(t: number, dt: number) {
        super.update(t, dt)
    }
}