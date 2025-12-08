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

        this.deck = []
        this.hand = [new CardHandler(0), new CardHandler(1), new CardHandler(2), new CardHandler(3), new CardHandler(4), new CardHandler(5)]
        this.discarded = []

        this.level = 0
        this.gold = 50
        this.exp = 0
        this.expMax = 20
        this.deckOriginal = []
        this.equipment = []

        for (let i = 0; i < this.deck.length; i++) {
            this.deck[i].setData(1)
        }
    }

    handleTick(game) {
        this.energyGen(game)
        for (let i = 0; i < 6; i++) {
            this.hand[i].handleTick(game)
        }
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

    startAdventure(deckID) {
        this.level = 0
        this.gold = 50
        this.exp = 0
        this.expMax = 20
        this.deckOriginal = []

        let data = JSON.parse(JSON.stringify(Data.deck[deckID]))
        console.log(data)
        for (let i = 0; i < data['card'].length; i++) {
            let card = new Card()
            card.setData(data['card'][i])
            this.deckOriginal.push(card)
        }
    }

    startBattle() {
        this.genLevel = 1
        this.genLevelMax = 5
        this.energyUpgrade = 5
        this.energyGenSpeed = 1
        this.energy = 2
        this.energyMax = 6
        this.life = 20
        this.lifeMax = 20
        this.deck = []
        this.hand = [new CardHandler(0), new CardHandler(1), new CardHandler(2), new CardHandler(3), new CardHandler(4), new CardHandler(5)]

        for (let i = 0; i < this.deckOriginal.length; i++) {
            this.deck.push(this.deckOriginal[i].clone())
        }
    }
}
