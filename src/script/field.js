class Field {
    constructor() {
        this.canvas = Img.temptile
    }

    render(game) {
        let fieldStart = [120, 120]
        let fieldSize = [100, 100]
        let tileSize = [80, 80]
        let ctx = game.ctx
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 10; j++) {
                let rect = [fieldStart[0] + fieldSize[0] * j, fieldStart[1] + fieldSize[1] * i, 100, 100]
                if ((i + j) % 2) {
                    ctx.drawImage(this.canvas, tileSize[0], 0, tileSize[1], tileSize[1], rect[0], rect[1], rect[2], rect[3])
                } else {
                    ctx.drawImage(this.canvas, 0, 0, tileSize[0], tileSize[1], rect[0], rect[1], rect[2], rect[3])
                }
                Render.strokeRectUI(ctx, rect)
            }
        }
    }
}
