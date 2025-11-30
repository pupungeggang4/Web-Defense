class SceneBattle {
    constructor(game) {
        game.menu = false
    }

    loop(game) {
        this.render(game)
    }

    render(game) {
        let ctx = game.ctx
        Render.init(ctx)
        Render.clearCanvas(game.canvas, ctx)
        Render.fillCanvas(game.canvas, ctx)
        Render.strokeRectUI(ctx, UI.battle.buttonMenu)

        if (game.menu === true) {
            Render.renderMenu(ctx)
        }
    }

    mouseUp(game, pos, button) {
        if (button === 0) {
            if (game.menu === false) {
                if (Func.pointInsideRectUI(pos, UI.battle.buttonMenu)) {
                    game.menu = true
                }
            } else if (game.menu === true) {
                if (Func.pointInsideRectUI(pos, UI.battle.buttonMenu) || Func.pointInsideRectUI(pos, UI.menu.buttonResume)) {
                    game.menu = false
                } else if (Func.pointInsideRectUI(pos, UI.battle.buttonExit)) {
                    game.scene = new SceneTitle(game)
                }
            }
        }
    }
}
