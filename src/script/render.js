class Render {
    static init(ctx) {
        ctx.font = '32px neodgm'
        ctx.textAlign = 'left'
        ctx.textBaseline = 'top'
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 2
        ctx.fillStyle = 'black'
    }

    static renderLowerUI(ctx, game) {
        Render.strokeRectUI(ctx, UI.battle.buttonUpgrade)
        for (let i = 0; i < 6; i++) {
            let rect = [UI.battle.cardStart[0] + UI.battle.cardInterval[0] * i, UI.battle.cardStart[1], UI.battle.cardSize[0], UI.battle.cardSize[1]]
            Render.strokeRectUI(ctx, rect)
        }
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
        ctx.fillRect(img, pos[0], pos[1])
    }

    static drawImageSizeUI(ctx, img, rect) {
        ctx.fillRect(img, rect[0], rect[1], rect[2], rect[3])
    }
}
