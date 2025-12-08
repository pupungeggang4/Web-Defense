class Card {
    constructor() {
        this.ID = 0
        this.energy = 0
        this.element = ''
        this.rarity = ''
        this.name = ''
        this.stat = [0, 0, 0]
        this.attackID = 0
        this.canvas = null
    }

    setData(ID) {
        let data = JSON.parse(JSON.stringify(Data.card[ID]))
        this.canvas = Img.card[ID]
        this.ID = ID
        this.energy = data['energy']
        this.element = data['element']
        this.rarity = data['rarity']
        this.stat = data['stat']
        this.attackID = data['attackID']
    }

    clone() {
        let card = new Card()
        card.canvas = Img.card[this.ID]
        card.ID = this.ID
        card.energy = this.energy
        card.element = this.element
        card.rarity = this.rarity
        card.stat = JSON.parse(JSON.stringify(this.stat))
        card.attackID = this.attackID
        return card
    }

    render(game) {
        let ctx = game.ctx
        Render.fillTextUI(ctx, this.energy, [4, 4])
        Render.drawImageSizeUI(ctx, this.canvas, [0, 0, 120, 120])
    }
}

class CardHandler {
    constructor(i) {
        this.rectUI = [UI.battle.cardStart[0] + UI.battle.cardInterval[0] * i, UI.battle.cardStart[1], UI.battle.cardSize[0], UI.battle.cardSize[1]]
        this.card = null
        this.reloadTimeMax = 4
        this.reloadTime = 4
    }

    handleTick(game) {
        let player = game.player
        if (this.card === null) {
            if (this.reloadTime > 0) {
                this.reloadTime -= game.delta / 1000
            } else {
                this.reloadTime = 0
            }

            if (this.reloadTime <= 0) {
                if (player.deck.length > 0) {
                    this.reloadTime = this.reloadTimeMax
                    this.card = player.deck.shift()
                }
            }
        }
    }

    render(game) {
        let ctx = game.ctx
        ctx.save()
        ctx.translate(this.rectUI[0], this.rectUI[1])
        if (this.card != null) {

            this.card.render(game)
        } else {
            let rectCool = [0, 0, UI.battle.cardSize[0] * this.reloadTime / this.reloadTimeMax, UI.battle.cardSize[1]]
            ctx.fillStyle = 'gray'
            Render.fillRectUI(ctx, rectCool)
        }
        ctx.restore()
    }
}
