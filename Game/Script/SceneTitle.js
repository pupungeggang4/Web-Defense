class SceneTitle {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.fillTextUI(game.ctx, 'Defense', UI.title.textTitle)
        Render.strokeRectUI(game.ctx, UI.title.buttonStart)
        Render.fillTextUI(game.ctx, 'Start', UI.title.textStart)
        Render.strokeRectUI(game.ctx, UI.title.buttonSurvival)
        Render.fillTextUI(game.ctx, 'Survival', UI.title.textSurvival)
        Render.strokeRectUI(game.ctx, UI.title.buttonErase)
        Render.fillTextUI(game.ctx, 'Erase', UI.title.textErase)
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (pointInsideRectUI(pos, UI.title.buttonStart)) {
                game.scene = 'levelselect'
                game.state = ''
            }
        }
    }
}
