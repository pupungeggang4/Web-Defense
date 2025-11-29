class Vec2 {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class Rect2 {
    constructor(x, y, w, h) {
        this.pos = new Vec2(x, y)
        this.size = new Vec2(w, h)
    }
}