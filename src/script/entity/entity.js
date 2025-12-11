class Entity {
    constructor() {
        this.rect = new Rect2(0, 0, 80, 80)
        this.canvas = null
    }

    render(game) {
        let ctx = game.ctx
        let rect = [this.rect.pos.x - this.rect.size.x / 2, this.rect.pos.y - this.rect.size.y / 2]
        ctx.drawImage(this.canvas, rect[0], rect[1], this.rect.size.x, this.rect.size.y)
    }
}
