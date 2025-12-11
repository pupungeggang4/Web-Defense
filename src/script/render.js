class Render {
    static init(ctx) {
        ctx.font = '32px neodgm'
        ctx.textAlign = 'left'
        ctx.textBaseline = 'top'
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 2
        ctx.fillStyle = 'black'
    }

    static renderStartWindow(ctx, game) {
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.window.rect)
        Render.strokeRectUI(ctx, UI.window.rect)
        ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, 'Choose start deck', UI.window.textTitle)
        for (let i = 0; i < 3; i++) {
            Render.strokeRectUI(ctx, UI.window.buttonItem[i])
        }
        Render.strokeRectUI(ctx, UI.window.buttonOK)
        Render.fillTextUI(ctx, 'OK', UI.window.textOK)
    }

    static renderUpperUI(ctx, game) {
        let player = game.player
        Render.fillTextUI(ctx, `Lv.${player.level}`, UI.battle.textLevel)
        Render.strokeRectUI(ctx, UI.battle.expBar)
        Render.fillTextUI(ctx, `Gold: ${player.gold}`, UI.battle.textGold)
        Render.fillTextUI(ctx, `Floor 1, Wave 1/5`, UI.battle.textWave)
        Render.strokeRectUI(ctx, UI.battle.waveProgress)
    }

    static renderLowerUI(ctx, game) {
        let player = game.player
        Render.fillTextUI(ctx, `Lv.${game.player.genLevel}`, UI.battle.textGenLevel)
        Render.drawImageUI(ctx, Img.iconenergy, UI.battle.iconEnergy)
        Render.fillTextUI(ctx, `${game.player.energy.toFixed(1)}/${game.player.energyMax}`, UI.battle.textEnergy)
        Render.drawImageUI(ctx, Img.iconlife, UI.battle.iconLife)
        Render.fillTextUI(ctx, `${game.player.life}/${game.player.lifeMax}`, UI.battle.textLife)
        Render.strokeRectUI(ctx, UI.battle.buttonUpgrade)
        Render.drawImageSizeUI(ctx, Img.buttonUpgrade, UI.battle.buttonUpgrade)
        if (game.player.genLevel < game.player.genLevelMax) {
            Render.fillTextUI(ctx, game.player.energyUpgrade, UI.battle.textUpgrade)
        } else {
            Render.fillTextUI(ctx, 'Max', UI.battle.textUpgrade)
        }
        for (let i = 0; i < 6; i++) {
            let rect = [UI.battle.cardStart[0] + UI.battle.cardInterval[0] * i, UI.battle.cardStart[1], UI.battle.cardSize[0], UI.battle.cardSize[1]]
            player.hand[i].render(game)
            Render.strokeRectUI(ctx, rect)
        }
        Render.drawImageUI(ctx, Img.buttonDeck, UI.battle.buttonDeck)
        Render.strokeRectUI(ctx, UI.battle.buttonDeck)
        Render.fillTextUI(ctx, player.deck.length, UI.battle.textDeck)
        Render.drawImageUI(ctx, Img.buttonDiscarded, UI.battle.buttonDiscarded)
        Render.strokeRectUI(ctx, UI.battle.buttonDiscarded)
        Render.fillTextUI(ctx, player.discarded.length, UI.battle.textDiscarded)
        Render.drawImageUI(ctx, Img.buttonReturn, UI.battle.buttonReturn)
        Render.strokeRectUI(ctx, UI.battle.buttonReturn)
    }

    static renderMenu(ctx) {
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.menu.rect)
        Render.strokeRectUI(ctx, UI.menu.rect)
        ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, 'Paused', UI.menu.textPaused)
        Render.strokeRectUI(ctx, UI.menu.buttonResume)
        Render.fillTextUI(ctx, 'Resume', UI.menu.textResume)
        Render.strokeRectUI(ctx, UI.menu.buttonExit)
        Render.fillTextUI(ctx, 'Exit', UI.menu.textExit)
    }

    static clearCanvas(canvas, ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    static fillCanvas(canvas, ctx) {
        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = 'black'
    }

    static fillTextUI(ctx, text, pos) {
        ctx.fillText(text, pos[0], pos[1])
    }

    static strokeRectUI(ctx, rect) {
        ctx.strokeRect(rect[0], rect[1], rect[2], rect[3])
    }

    static fillRectUI(ctx, rect) {
        ctx.fillRect(rect[0], rect[1], rect[2], rect[3])
    }

    static drawImageUI(ctx, img, pos) {
        ctx.drawImage(img, pos[0], pos[1])
    }

    static drawImageSizeUI(ctx, img, rect) {
        ctx.drawImage(img, rect[0], rect[1], rect[2], rect[3])
    }
}
