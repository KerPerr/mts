import { Engine, Body, Bodies, Composite, Runner } from 'matter-js';
import TiledMap from './TiledMap';
import User from "./User";

export default class TiledWorld {

    public tiledMap: TiledMap

    private _players: { [uid: string]: Body } = {}
    public _engine: Engine

    constructor(data: TiledMap) {
        this.tiledMap = data
        this._engine = Engine.create()
        this._engine.world.gravity.y = 0

        Runner.run(this._engine)
    }

    addBoxes(x: number, y: number, w: number, h: number): void {
        const box = Bodies.rectangle(x+w/2, y+h/2, w, h, { isStatic: true })
        Composite.add(this._engine.world, box)
    }

    addPlayer(user: User): void {
        this._players[user.id] = Bodies.rectangle(
            user.position.x+user.width/2,
            user.position.y+user.height/2,
            user.width,
            user.height
        )
        Composite.add(this._engine.world, this._players[user.id])
    }

    removePlayer(user: User): void {
        Composite.remove(this._engine.world, this._players[user.id])
        delete this._players[user.id]
    }

    updatePlayerData(user: User, data: any): void {
        const player = this._players[user.id]
        Body.setVelocity(player, {x: 0, y: 0})
        let vx: number = 0, vy: number = 0
        
        if (data['left']) {
            vx = -user.speed
        } else if (data['right']) {
            vx = user.speed
        }

        if (data['up']) {
            vy = -user.speed
        } else if (data['down']) {
            vy = user.speed
        }

        Body.setVelocity(player, {x: vx, y: vy } )
        user.setPosition(player.position)
    }
}