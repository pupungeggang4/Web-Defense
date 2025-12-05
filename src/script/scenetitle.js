class SceneTitle {
    constructor(game) {
        game.menu = false
        game.state = ''
    }

    loop(game) {
        this.render(game)
    }

    render(game) {
        let ctx = game.ctx
        Render.init(ctx)
        Render.clearCanvas(game.canvas, ctx)
        Render.fillCanvas(game.canvas, ctx)
        Render.fillTextUI(ctx, "Defense Game", UI.title.textTitle)
        Render.strokeRectUI(ctx, UI.title.buttonStart)
        Render.fillTextUI(ctx, "Start Game", UI.title.textStart)
        Render.strokeRectUI(ctx, UI.title.buttonCollection)
        Render.fillTextUI(ctx, "Collection", UI.title.textCollection)
    }

    mouseUp(game, pos, button) {
        if (Func.pointInsideRectUI(pos, UI.title.buttonStart)) {
            game.scene = new SceneBattle(game)
            game.state = 'start'

        }
        if (Func.pointInsideRectUI(pos, UI.title.buttonCollection)) {
            game.scene = new SceneCollection(game)
        }
    }
}
