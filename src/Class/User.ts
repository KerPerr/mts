export default class User {

    private _id: string

    public width: number = 20
    public height: number = 28

    public speed: number = 1
    public position: {x: number, y: number}

    constructor(id: string) {
        this._id = id
        this.position = {x: 44, y: 44}
    }

    
    get id(): string { return this._id }
    
    setPosition(position: {x: number, y: number}): void {
        this.position = position
    }
}