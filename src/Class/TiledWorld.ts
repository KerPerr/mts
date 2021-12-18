import { Engine, Body, Bodies, Composite, Runner, Vector } from 'matter-js';
import TiledMap from './TiledMap';
import User from "./User";

export default class TiledWorld {

    public tiledMap: TiledMap

    public _players: { [uid: string]: Body } = {}
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
        let body = Bodies.rectangle(
            user.position.x,
            user.position.y,
            user.width,
            user.height,
            {
                restitution: 0,
                friction: 0,
                inertia: Infinity
            }
        )
        this._players[user.id] = body
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

        let velocity = Vector.create(vx, vy)

        Body.setVelocity(player, Vector.mult(Vector.normalise(velocity), user.speed))
    }
}