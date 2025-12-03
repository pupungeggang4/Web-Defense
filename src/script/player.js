class Player {
    constructor() {
        this.genLevel = 1
        this.genLevelMax = 5
        this.energyUpgrade = 5
        this.energyGenSpeed = 1
        this.energy = 2
        this.energyMax = 6
        this.life = 20
        this.lifeMax = 20
    }

    handleTick(game) {
        this.energyGen(game)
    }

    energyGen(game) {
        this.energy += this.energyGenSpeed * game.delta / 1000
        if (this.energy >= this.energyMax) {
            this.energy = this.energyMax
        }
    }

    upgrade(game) {
        if (this.energy >= this.energyUpgrade && this.genLevel < this.genLevelMax) {
            this.energy -= this.energyUpgrade
            this.genLevel++
            this.energyUpgrade += 2
            this.energyMax += 2
            this.energyGenSpeed += 0.1
        }
    }
}
