class Img {
    static loadPair = [['player', 'image/player.png', '']]
    static card = {} 
}

class Aud {
    static loadPair = [['main', 'audio/main.wav', '']]
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
