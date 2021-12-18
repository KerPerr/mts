import Phaser from 'phaser'
import TiledMap from './scenes/TiledMap'
import { socket } from './Game/Helper'

socket.on('createMap', (data) => {
	console.log('DATA', data)
	data.name = 'studio'
	app.scene.add(
		data.name,
		new TiledMap(data),
		true
	)

	socket.emit('requestOldUsers')
})

socket.on('users', (data) => {
	let scene = app.scene.getScene('studio') as TiledMap	
	for(const [key, value] of Object.entries(data)){
		scene.updateUser(value)
	}
})

socket.on('createPlayer', (data: any) => {
	console.log(app.scene.scenes)
	let scene = app.scene.getScene('studio') as TiledMap
	scene.addPlayer(data)
})

socket.on('addOtherPlayer', (data) => {
	let scene = app.scene.getScene('studio') as TiledMap
	scene.addOther(data)
})

socket.on('removeOtherPlayer', (data) => {
	let scene = app.scene.getScene('studio') as TiledMap
	scene.removeOther(data)
})

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	scale: {
		mode: Phaser.Scale.ScaleModes.FIT,
		//autoCenter: Phaser.Scale.Center.CENTER_BOTH
	},
	width: 800,
	height: 600,
	/*
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
			debug: true
		}
	},
	*/
}

const app = new Phaser.Game(config)

export default app