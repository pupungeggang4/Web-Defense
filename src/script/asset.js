class Img {
    static loadPair = [
        ['player', 'image/player.png', ''],
        ['tempproj', 'image/tempproj.png', ''],
        ['temptile', 'image/temptile.png', ''],
        ['iconlife', 'image/iconlife.png', ''],
        ['iconenergy', 'image/iconenergy.png', ''],
        ['spawn', 'image/spawn.png', ''],
        ['endpoint', 'image/endpoint.png', ''],
        ['buttonUpgrade', 'image/buttonupgrade.png', ''],
        ['buttonDeck', 'image/buttondeck.png', ''],
        ['buttonDiscarded', 'image/buttondiscarded.png', ''],
        ['buttonPause', 'image/buttonpause.png', ''],
        ['buttonReturn', 'image/buttonreturn.png', ''],
        [1, 'image/card/card001.png', 'card'],
        [2, 'image/card/card002.png', 'card'],
        [3, 'image/card/card003.png', 'card'],
    ]
    static card = {}
}

class Aud {
    static loadPair = []
}

class AssetManager {
    static numLoaded = 0
    static preload(callback) {
        AssetManager.numLoaded = 0
        for (const i in Img.loadPair) {
            let pair = Img.loadPair[i]
            let img = new Image()
            img.src = pair[1]
            if (pair[2] == 'card') {
                Img.card[pair[0]] = img
            } else {
                Img[pair[0]] = img
            }
            img.onload = () => {
                AssetManager.numLoaded++
                if (AssetManager.numLoaded >= Img.loadPair.length + Aud.loadPair.length) {
                    callback()
                }
            }
            img.onerror = () => {
                AssetManager.numLoaded++
                if (AssetManager.numLoaded >= Img.loadPair.length + Aud.loadPair.length) {
                    callback()
                }
            }
        }
        for (const i in Aud.loadPair) {
            let pair = Aud.loadPair[i]
            let aud = new Audio()
            aud.src = pair[1]
            Aud[pair[0]] = aud
            aud.addEventListener('canplaythrough', function() { 
                AssetManager.numLoaded++
                if (AssetManager.numLoaded >= Img.loadPair.length + Aud.loadPair.length) {
                    callback()
                }
            }, false)
            aud.addEventListener('error', function() { 
                AssetManager.numLoaded++
                if (AssetManager.numLoaded >= Img.loadPair.length + Aud.loadPair.length) {
                    callback()
                }
            }, false)
        }
    }
}
