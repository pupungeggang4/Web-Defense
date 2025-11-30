window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

let game = null

function main() {
    AssetManager.preload(() => {
        game = new Game()
        game.run()
    })
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        if (game != null) {
            cancelAnimationFrame(game.gameLoop)
        }
    }
}

function rightClick() {
    return false
}
