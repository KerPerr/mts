import { vec2 } from 'gl-matrix'
import User from './User'

export default class Other extends User {

    constructor(scene: Phaser.Scene, id: string, position: vec2, texture: string) {
        super(scene, id, position, texture)
    }

    update(t: number, dt: number) {
        
    }
}