class Data {
    static unit = {}
    static card = {}
    static deck = {}
    static level = {}
    static loadData() {
        Data.unit = JSON.parse(JSON.stringify(dataUnit))
        Data.card = JSON.parse(JSON.stringify(dataCard))
        Data.deck = JSON.parse(JSON.stringify(dataDeck))
        Data.level = JSON.parse(JSON.stringify(dataLevel))
    }
}
