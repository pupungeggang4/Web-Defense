class Unit extends Entity {
    constructor() {
        super()
        this.rect = new Rect2(0, 0, 80, 80)
        this.speed = 0
        this.movable = true

        this.side = 0

        this.ID = 0
        this.hp = 0
        this.hpMax = 0
        this.attack = 0
        this.attackSpeed = 0
        this.attackCool = 0
        this.attackCoolLeft = 0
        this.weapon = []
    }

    setData(ID) {
        let data = JSON.parse(JSON.stringify(Data.unit[ID]))
        this.ID = ID
        this.speed = data['speed']
        this.hp = data['stat'][2]
        this.hpMax = data['stat'][2]
        this.attack = data['stat'][0]
        this.attackSpeed = data['stat'][1]
        this.attackCool = 1 / data['stat'][1]
        this.attackCoolLeft = this.attackCool
        this.weapon = data['weapon']
    }
}
