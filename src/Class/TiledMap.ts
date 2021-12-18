import { promises } from 'fs';
import * as path from 'path'
import TiledWorld from './TiledWorld';

export default class TiledMap {
    
    private json: any
    private colliders: number[] = []

    constructor() {}

    public static async build(file: string): Promise<TiledMap> {
        const map = new TiledMap()
        const data = await promises.readFile(path.join(__dirname, `../Assets/Maps/${file}`))
        map.json = JSON.parse(data.toString())
        await map.initialize()
        return map
    }

    createWorld(): TiledWorld {
        const world = new TiledWorld(this)
        for(let layer of this.json.layers) {
            let posX: number = 0, posY: number = 0
            for(let index in layer.data) {
                if(this.colliders.indexOf(layer.data[index]) > -1) {
                    world.addBoxes(posX, posY, this.json.tilewidth, this.json.tileheight)
                }
                posX += this.json.tilewidth
                if(posX > (this.json.width - 1) * this.json.tilewidth) {
                    posX = 0
                    posY += this.json.tileheight
                }
            }
        }
        return world
    }

    async initialize(): Promise<void> {
        for(let tileset of this.json.tilesets) {
            for(let tile of tileset.tiles) {
                for(let prop of tile.properties) {
                    if(prop.name === 'collide' && prop.value) {
                        this.colliders.push(tile.id+1)
                    }
                }
            }
        }
    }
}