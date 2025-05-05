class SceneLevelSelect {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.fillTextUI(game.ctx, 'Level Select', UI.levelselect.textTitle)
        Render.strokeRectUI(game.ctx, UI.levelselect.buttonBack)
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (pointInsideRectUI(pos, UI.levelselect.buttonBack)) {
                game.scene = 'title'
                game.state = ''
            }
        }
    }
}
