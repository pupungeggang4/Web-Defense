class Game {
    constructor() {
        this.state = ''
        this.menu = false

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        this.ctx.imageSmoothingEnabled = false;

        this.canvas.addEventListener('mouseup', (event) => this.mouseUp(event), false)
        this.frameCurrent = 0; this.framePrevious = 0; this.delta = 0;

        this.field = new Field()
    }

    run() {
        this.scene = new SceneTitle(this)
        this.framePrevious = performance.now()
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        this.frameCurrent = performance.now()
        this.delta = this.frameCurrent - this.framePrevious
        this.framePreivous = this.frameCurrent

        this.scene.loop(this)
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    mouseUp(event) {
        let targetRect = this.canvas.getBoundingClientRect();
        let pos = {
            x: (event.clientX - targetRect.left) / targetRect.width * this.canvas.width,
            y: (event.clientY - targetRect.top) / targetRect.height * this.canvas.height
        }
        let button = event.button

        this.scene.mouseUp(this, pos, button)
    }
}
