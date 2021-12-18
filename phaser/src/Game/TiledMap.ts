import Phaser from 'phaser'

import User from './Class/User'
import Player from './Class/Player'

export default class TiledMap extends Phaser.Scene {

    private _users: { [id: string]: User } = {}

    private _data: any
    private _map?: Phaser.Tilemaps.Tilemap
    private _layers: { [type: string]: Phaser.Tilemaps.TilemapLayer } = {}

    constructor(data: any) {
        super(data.name)
        this._data = data
    }

    preload(): void {
        this.load.image('empty', `assets/images/empty.png`)
        this.load.image('tiles', 'assets/maps/indoor.png')
        this.load.tilemapTiledJSON('map', this._data.json) //.json for mts
    }

    create(): void {
        this._map = this.make.tilemap({ key: 'map' })

        const tileset = this._map.addTilesetImage('indoor', 'tiles')
        
        for (let layer of this._data.json.layers) { //.json.layers for mts
            this._layers[layer.name] = this._map.createLayer(layer.name, tileset, 0, 0).setCollisionByProperty({ collide: true })
            if (layer.name === 'above') this._layers[layer.name].setDepth(10)
        }
    }

    addPlayer(data: any) {
        const loader = new Phaser.Loader.LoaderPlugin(this)

        loader.spritesheet('player', 'assets/spritesheets/geek.png', {
            frameWidth: 36,
            frameHeight: 36
        }).start()

        loader.on('complete', () => {
            const player = new Player(this, data._id, new Phaser.Math.Vector2(data.position.x, data.position.y), 'player')
            this.cameras.main.startFollow(player.sprite, true, 0.8, 0.8)
            console.log('addPlayer', player)
            this._users[data._id] = player
        })
    }

    addOther(data: any) {
        const loader = new Phaser.Loader.LoaderPlugin(this)

        loader.spritesheet('other', 'assets/spritesheets/geek.png', {
            frameWidth: 36,
            frameHeight: 36
        }).start()

        loader.on('complete', () => {
            const user = new User(this, data._id, new Phaser.Math.Vector2(data.position.x, data.position.y), 'other')
            console.log('addUser', user)
            this._users[data._id] = user
        })
    }

    updateUser(userData: any) {
        if(this._users[userData._id] !== undefined) {

            if(this._users[userData._id]._isWalking !== userData.isWalking) {
                this._users[userData._id]._isWalking = userData.isWalking
            }

            if(this._users[userData._id]._direction.N !== userData.direction.N) {
                this._users[userData._id]._direction.N = userData.direction.N
            }
            if(this._users[userData._id]._direction.S !== userData.direction.S) {
                this._users[userData._id]._direction.S = userData.direction.S
            }
            if(this._users[userData._id]._direction.E !== userData.direction.E) {
                this._users[userData._id]._direction.E = userData.direction.E
            }
            if(this._users[userData._id]._direction.W !== userData.direction.W) {
                this._users[userData._id]._direction.W = userData.direction.W
            }
            
            this._users[userData._id].sprite.setPosition(userData.position.x, userData.position.y)
        }
    }

    updatePosition(data: any) {
        if(this._users[data._id] !== undefined) {
            this._users[data._id].sprite.setPosition(
                data.position.x,
                data.position.y
            )
        }
    }

    removeOther(data: any) {
        for (const [key, value] of Object.entries(this._users)) {
            if (key === data._id) {
                value.destroy()
                delete this._users[key]
            }
        }
    }

    update(t: number, dt: number): void {
        for (const [key, value] of Object.entries(this._users)) {
            value.update(t, dt)
        }
    }
}