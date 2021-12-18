export default class User {

    private _id: string

    public width: number = 20
    public height: number = 28

    public speed: number = 1.5
    public isWalking: boolean = false
    public position: {x: number, y: number}
    public direction: {[dir: string]: boolean} = {N: false, S: false, E: false, W: false}

    constructor(id: string) {
        this._id = id
        this.position = {x: 44, y: 44}
    }
    
    get id(): string { return this._id }

    setDirection(velocity: {x: number, y: number}) {
        
        if(velocity.x === 0 && velocity.y === 0) {
            this.isWalking = false
        } else {
            this.isWalking = true
        }

        if (velocity.y < 0) {
            this.direction = {N: true, S: false, E: false, W: false}
        } else if (velocity.y > 0) {
            this.direction = {N: false, S: true, E: false, W: false}
        } else if (velocity.x < 0) {
            this.direction = {N: false, S: false, E: false, W: true}
        } else if (velocity.x > 0) {
            this.direction = {N: false, S: false, E: true, W: false}
        }
    }

    setPosition(position: {x: number, y: number}): void {
        this.position = position
    }
}