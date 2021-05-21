import { Engine, Body, Bodies, Runner, Composite, Events } from 'matter-js';
import { Socket } from 'socket.io';
import TiledMap from './TiledMap';
import User from "./User";

export default class TiledWorld {

    public tiledMap: TiledMap

    private _users: { [uid: string]: User } = {}
    private _players: { [uid: string]: Body } = {}
    private _sockets: { [uid: string]: Socket } = {}

    private _engine: Engine

    constructor(data: TiledMap) {
        this.tiledMap = data
        this._engine = Engine.create()
        this._engine.world.gravity.y = 0
        Runner.run(this._engine)
/*
        Events.on(this._engine, 'beforeUpdate', (event) => {
            for(const [key, value] of Object.entries(this._users)) {
                this._sockets[key].emit('updatePosition', value)
            }
        })
*/
    }

    addBoxes(x: number, y: number, w: number, h: number): void {
        const box = Bodies.rectangle(x+w/2, y+h/2, w, h, { isStatic: true })
        Composite.add(this._engine.world, box)
    }

    addPlayer(socket: Socket): void {
        this._sockets[socket.id] = socket
        let user = new User(socket.id)
        this._players[socket.id] = Bodies.rectangle(
            user.position.x+user.width/2,
            user.position.y+user.height/2,
            user.width,
            user.height
        )
        Composite.add(this._engine.world, this._players[user.id])
        this._users[socket.id] = user
    }

    removePlayer(user: User): void {
        Composite.remove(this._engine.world, this._players[user.id])
        delete this._users[user.id]
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