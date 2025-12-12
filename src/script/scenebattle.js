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
                if (Util.pointInsideRectUI(pos, UI.battle.buttonMenu)) {
                    game.menu = true
                }

                if (game.state === 'start') {
                    this.mouseUpStart(game, pos)
                } else if (game.state === 'battle') {
                    this.mouseUpBattle(game, pos)
                }
            } else if (game.menu === true) {
                if (Util.pointInsideRectUI(pos, UI.battle.buttonMenu) || Func.pointInsideRectUI(pos, UI.menu.buttonResume)) {
                    game.menu = false
                } else if (Func.pointInsideRectUI(pos, UI.menu.buttonExit)) {
                    game.scene = new SceneTitle(game)
                }
            }
        }
    }

    mouseUpStart(game, pos) {
        for (let i = 0; i < 3; i++) {
            if (Util.pointInsideRectUI(pos, UI.window.buttonItem[i])) {
                game.selectedAdventureStart = i
            }
        }
        if (Util.pointInsideRectUI(pos, UI.window.buttonOK)) {
            if (game.selectedAdventureStart != -1) {
                game.player.startAdventure(game.adventure.rewardPool[game.selectedAdventureStart])
                game.player.startBattle()
                game.state = 'battle'
                game.stateClick = ''
            }
        }
    }

    mouseUpBattle(game, pos) {
        if (Util.pointInsideRectUI(pos, UI.battle.buttonUpgrade)) {
            game.player.upgrade(game)
        }
        if (game.stateClick === '') {
            for (let i = 0; i < 6; i++) {
                let rect = [UI.battle.cardStart[0] + UI.battle.cardInterval[0] * i, UI.battle.cardStart[1], UI.battle.cardSize[0], UI.battle.cardSize[1]]
                if (Util.pointInsideRectUI(pos, rect)) {
                    game.stateClick = 'card'
                    game.selectedCard = i
                }
            }
            if (Util.pointInsideRectUI(pos, UI.battle.fieldArea)) {
                let cellCoord = Util.getTileCell(pos)
                game.stateClick = 'field'
                game.selectedField = [cellCoord[0], cellCoord[1]]
            }
        } else if (game.stateClick === 'card') {
            if (Util.pointInsideRectUI(pos, UI.battle.fieldArea)) {
                let cellCoord = Util.getTileCell(pos)
                game.player.playCard(game, game.selectedCard, cellCoord[0], cellCoord[1])
            }
            game.stateClick = ''
            game.selectedCard = -1
        } else if (game.stateClick === 'field') {
            if (Util.pointInsideRectUI(pos, UI.battle.buttonReturn)) {
                if (game.field.tileLayout[game.selectedField[0]][game.selectedField[1]] instanceof Tower) {
                    let tower = game.field.tileLayout[game.selectedField[0]][game.selectedField[1]]
                    tower.returnToDeck(game)
                }
            }
            if (Util.pointInsideRectUI(pos, UI.battle.fieldArea)) {
                let cellCoord = Util.getTileCell(pos)
                if (Math.abs(cellCoord[0] - game.selectedField[0]) === 1 && cellCoord[1] === game.selectedField[1] || cellCoord[0] === game.selectedField[0] && Math.abs(cellCoord[1] - game.selectedField[1]) === 1) {
                    if (game.field.tileLayout[game.selectedField[0]][game.selectedField[1]] instanceof Tower) {
                        let tower = game.field.tileLayout[game.selectedField[0]][game.selectedField[1]]
                        tower.moveTo(game, cellCoord[0], cellCoord[1])
                    }
                }
            }
            game.stateClick = ''
            game.selectedField = [-1, -1]
        }
    }
}
