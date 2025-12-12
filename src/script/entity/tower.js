class Tower extends Structure {
    constructor() {
        super()
        this.energy = 0
        this.movable = false
        this.fieldPos = [0, 0] // row, col
    }

    moveTo(game, row, col) {
        let field = game.field
        let tileLayout = game.field.tileLayout
        if (tileLayout[row][col] === null) {
            tileLayout[row][col] = this
            tileLayout[this.fieldPos[0]][this.fieldPos[1]] = null
            this.fieldPos = [row, col]
            this.rect.pos = field.findTileCenter(row, col)
        }
    }

    toCard() {
        let data = JSON.parse(JSON.stringify(Data.card[this.ID]))
        let card = new Card()
        card.ID = this.ID
        card.canvas = Img.card[this.ID]
        card.element = data['element']
        card.rarity = data['rarity']
        card.name = data['name']
        card.type = data['type']
        card.energy = this.energy
        card.stat = data['stat']
        card.weapon = data['weapon']
        return card
    }

    handleRemove(game) {
        let unitList = game.field.unitList
        let tileLayout = game.field.tileLayout
        tileLayout[this.fieldPos[0]][this.fieldPos[1]] = null
        unitList.splice(unitList.indexOf(this), 1)
    }

    returnToDeck(game) {
        let player = game.player
        let card = this.toCard()
        player.discarded.push(card)
        this.handleRemove(game)
    }
}
