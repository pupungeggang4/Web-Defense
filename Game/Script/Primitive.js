class Vector2D {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    transform(vec) {
        this.x += x
        this.y += y
    }

    scale(s) {
        this.x *= x
        this.y *= y
    }

    norm() {
        return Math.floor(this.x ** 2 + this.y ** 2)
    }

    normalize() {
        let n = this.norm()
        this.x /= n
        this.y /= n
    }

    static VecNorm(v) {
        return Math.floor(v.x ** 2 + v.y ** 2)
    }

    static VecNormalize(v) {
        let n = VecNorn(v)
        return new Vector2D(v.x / n, v.y / n)
    }

    static VecAdd(v1, v2) {
        return new Vector2D(v1.x + v2.x, v1.y + v2.y)
    }

    static VecMul(v1, s) {
        return new Vector2D(v1.x * s, v2.x * s)
    }

    static VecDot(v1, v2) {
        return v1.x * v2.x + v1.y * v2.y
    }
}

class Rect2D {
    constructor(x, y, w, h) {
        this.position = new Vector2D(x, y)
        this.size = new Vector2D(w, h)
    }
}
