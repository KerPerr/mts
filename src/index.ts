import { Server, Socket } from "socket.io"
import TiledMap from "./Class/TiledMap"
import TiledWorld from "./Class/TiledWorld"
import User from "./Class/User"

class Game extends Server {

    private world: TiledWorld
    private users: { [id: string]: User } = {}

    constructor() {
        super({ cors: { origin: '*' } })

        this.on('connection', (socket: Socket) => {
            console.log('User connected', socket.id)
            this.users[socket.id] = new User(socket.id)

            if (this.world === undefined) {
                TiledMap.build('house.json')
                    .then(map => this.next(socket, map))
                    .catch(err => console.log(err))
            } else {
                this.next(socket, this.world.tiledMap)
            }
        })

        this.listen(3000)
    }

    next(socket: Socket, result?: TiledMap) {
        if (this.world === undefined) { this.world = result.createWorld() }

        socket.emit('createMap', result)

        this.world.addPlayer(socket)
        socket.emit('createPlayer', this.users[socket.id])

        socket.broadcast.emit('addOtherPlayer', this.users[socket.id])

        socket.on('requestOldUsers', () => {
            for (const [key, value] of Object.entries(this.users)) {
                if (key !== socket.id) { socket.emit('addOtherPlayer', value) }
            }
        })

        socket.on('keyPressed', (data) => {
            const u = this.users[socket.id]
            this.world.updatePlayerData(u, data)
            this.emit('updatePosition', u)
        })

        socket.on('keyReleased', (data) => {
            const user = this.users[socket.id]
            this.world.updatePlayerData(user, data)
            this.emit('updatePosition', user)
        })

        socket.on('disconnect', () => {
            console.log('User disconnected', socket.id)
            this.emit('removeOtherPlayer', this.users[socket.id])
            this.world.removePlayer(this.users[socket.id])
            delete this.users[socket.id]
        })
    }
}

const game = new Game()