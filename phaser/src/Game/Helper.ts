import Phaser from 'phaser'
import { io } from 'socket.io-client'

export const socket = io("http://localhost:3000")

export default class Helper {

    private constructor() {}

    static getSafeTile(safeLayer: Phaser.Tilemaps.TilemapLayer, unsafeLayer: Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tile {
        const tiles = safeLayer.getTilesWithin(0, 0, safeLayer.width, safeLayer.height)
        const tile = tiles[Phaser.Math.Between(0, tiles.length)]
        if(unsafeLayer.getTileAt(tile.x, tile.y)) {
            this.getSafeTile(safeLayer, unsafeLayer)
        }
        return tile
    }
}