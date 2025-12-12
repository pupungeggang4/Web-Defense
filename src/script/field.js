class Field {
    constructor() {
        this.canvas = Img.temptile
        this.endpoint = []
        this.spawn = []
        this.tileLayout = [
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ]
        this.unitList = []
        this.projectileList = []

        for (let i = 0; i < 4; i++) {
            let endpoint = new Endpoint()
            endpoint.rect.pos = new Vec2(90, 170 + UI.battle.fieldCellSize[1] * i)
            this.endpoint.push(endpoint)
            let spawn = new Spawn()
            spawn.rect.pos = new Vec2(1190, 170 + UI.battle.fieldCellSize[1] * i)
            this.spawn.push(spawn)
        }
    }

    findTileCenter(row, col) {
        return new Vec2(190 + col * 100, 170 + row * 100)
    }

    handleTick(game) {

    }

    render(game) {
        let fieldStart = [140, 120]
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

        for (let i = 0; i < 4; i++) {
            this.spawn[i].render(game)
            this.endpoint[i].render(game)
        }

        for (let i = 0; i < this.unitList.length; i++) {
            this.unitList[i].render(game)
        }
    }
}
