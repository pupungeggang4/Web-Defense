class Tower extends Structure {
    constructor() {
        super()
        this.movable = false
        this.fieldPos = [0, 0] // row, col
    }

    handleRemove(game) {
        let unitList = game.field.unitList
        let tileLayout = game.field.tileLayout
        tileLayout[this.fieldPos[0]][this.fieldPos[1]] = null
        unitList.splice(unitList.indexOf(this), 1)
    }
}
