class SceneBattle {
    constructor(game) {
        game.menu = false
        game.field = new Field()
        game.player = new Player()
        game.battle = new Battle()
        game.adventure = new Adventure()

        game.battle.level = 'plains'
        game.adventure.rewardPool = []
        let tempPool = Object.keys(Data.deck)
        for (let i = 0; i < 3; i++) {
            let index = Math.floor(Math.random() * tempPool.length)
            game.adventure.rewardPool.push(tempPool.splice(index, 1)[0])
        }

        game.selectedAdventureStart = -1
    }

    loop(game) {
        if (game.menu === false) {
            if (game.state === 'battle') {
                game.player.handleTick(game)
            }
        }
        this.render(game)
    }

    render(game) {
        let ctx = game.ctx
        Render.init(ctx)
        Render.clearCanvas(game.canvas, ctx)
        Render.fillCanvas(game.canvas, ctx)
        Render.drawImageUI(ctx, Img.buttonPause, UI.battle.buttonMenu)
        Render.strokeRectUI(ctx, UI.battle.buttonMenu)

        game.field.render(game)
        Render.renderUpperUI(ctx, game)
        Render.renderLowerUI(ctx, game)
        
        if (game.state === 'start') {
            Render.renderStartWindow(ctx, game)
        }

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

                if (game.state === 'start') {
                    this.mouseUpStart(game, pos)
                } else if (game.state === 'battle') {
                    this.mouseUpBattle(game, pos)
                }
            } else if (game.menu === true) {
                if (Func.pointInsideRectUI(pos, UI.battle.buttonMenu) || Func.pointInsideRectUI(pos, UI.menu.buttonResume)) {
                    game.menu = false
                } else if (Func.pointInsideRectUI(pos, UI.menu.buttonExit)) {
                    game.scene = new SceneTitle(game)
                }
            }
        }
    }

    mouseUpStart(game, pos) {
        for (let i = 0; i < 3; i++) {
            if (Func.pointInsideRectUI(pos, UI.window.buttonItem[i])) {
                game.selectedAdventureStart = i
            }
        }
        if (Func.pointInsideRectUI(pos, UI.window.buttonOK)) {
            if (game.selectedAdventureStart != -1) {
                game.player.startAdventure(game.adventure.rewardPool[game.selectedAdventureStart])
                game.player.startBattle()
                game.state = 'battle'
            }
        }
    }

    mouseUpBattle(game, pos) {
        if (Func.pointInsideRectUI(pos, UI.battle.buttonUpgrade)) {
            game.player.upgrade(game)
        }
    }
}
