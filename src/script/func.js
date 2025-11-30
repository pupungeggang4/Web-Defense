class Func {
    static pointInsideRectUI(pos, button) {
        return pos.x > button[0] && pos.x < button[0] + button[2] && pos.y > button[1] && pos.y < button[1] + button[3]
    }
}
