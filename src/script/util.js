class Util {
    static pointInsideRectUI(pos, button) {
        return pos.x > button[0] && pos.x < button[0] + button[2] && pos.y > button[1] && pos.y < button[1] + button[3]
    }

    static getTileCell(pos, tileStart = [140, 120], tileSize = [100, 100], size = [4, 10]) {
        let row = Math.floor((pos.y - tileStart[1]) / tileSize[1])
        let col = Math.floor((pos.x - tileStart[0]) / tileSize[0])
        if (row >= 0 && row < size[0] && col >= 0 && col < size[1]) {
            return [row, col]
        } else {
            return [-1, -1]
        }
    }
}
