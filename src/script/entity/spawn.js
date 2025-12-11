class Spawn extends Entity {
    constructor() {
        super()
        this.canvas = Img.spawn
        this.rect = new Rect2(0, 0, 100, 100)
        this.endDistance = 20
    }
}
