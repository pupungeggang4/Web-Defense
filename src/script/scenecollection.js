class SceneCollection {
    constructor(game) {

    }

    loop(game) {
        this.render(game)
    }

    render(game) {
        let ctx = game.ctx
        Render.init(ctx)
        Render.clearCanvas(game.canvas, ctx)
        Render.fillCanvas(game.canvas, ctx)
        Render.strokeRectUI(ctx, UI.collection.buttonBack)
    }

    mouseUp(game, pos, button) {
        if (button === 0) {
            if (Func.pointInsideRectUI(pos, UI.collection.buttonBack)) {
                game.scene = new SceneTitle(game)
            }
        }
    }
}
