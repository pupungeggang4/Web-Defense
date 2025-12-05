class Data {
    static unit = {}
    static card = {}
    static loadData() {
        Data.unit = JSON.parse(JSON.stringify(dataUnit))
        Data.card = JSON.parse(JSON.stringify(dataCard))
        Data.level = JSON.parse(JSON.stringify(dataLevel))
    }
}
