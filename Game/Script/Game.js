class Game {
    constructor() {
        imageLoad()
        this.scene = 'title'
        this.state = ''
        this.menu = false

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        this.canvas.addEventListener('mouseup', (event) => this.mouseUp(event), false)

        this.frameCurrent = performance.now()
        this.framePrevious = performance.now()
        this.delta = 16
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        this.framePrevious = this.frameCurrent
        this.frameCurrent = performance.now()
        this.delta = this.frameCurrent - this.framePrevious
        
        if (this.scene === 'title') {
            SceneTitle.loop(this)
        } else if (this.scene === 'levelselect') {
            SceneLevelSelect.loop(this)
        } else if (this.scene === 'map') {
            SceneMap.loop(this)
        } else if (this.scene === 'defense') {
            SceneDefense.loop(this)
        }

        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    mouseUp(event) {
        let targetRect = this.canvas.getBoundingClientRect()
        let pos = {
            x: (event.clientX - targetRect.left) / targetRect.width * this.canvas.width,
            y: (event.clientY - targetRect.top) / targetRect.height * this.canvas.height
        }
        let button = event.button

        if (this.scene === 'title') {
            SceneTitle.mouseUp(this, pos, button)
        } else if (this.scene === 'levelselect') {
            SceneLevelSelect.mouseUp(this, pos, button)
        } else if (this.scene === 'map') {
            SceneMap.mouseUp(this, pos, button)
        } else if (this.scene === 'defense') {
            SceneDefense.mouseUp(this, pos, button)
        }
    }
}

function pointInsideRectUI(pos, rect) {
    return pos.x > rect[0] && pos.x < rect[0] + rect[2] && pos.y > rect[1] && pos.y < rect[1] + rect[3]
}
