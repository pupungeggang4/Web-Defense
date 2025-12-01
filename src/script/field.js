class Field {
    constructor() {

    }

    render(game) {
        let fieldStart = [120, 120]
        let fieldSize = [100, 100]
        let ctx = game.ctx
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 10; j++) {
                let rect = [fieldStart[0] + fieldSize[0] * j, fieldStart[1] + fieldSize[1] * i, 100, 100]
                Render.strokeRectUI(ctx, rect)
            }
        }
    }
}
