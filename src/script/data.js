class Data {
    static unit = {}
    static card = {}
    static loadData() {
        Data.unit = JSON.parse(JSON.stringify(dataUnit))
        Data.card = JSON.parse(JSON.stringify(dataCard))
    }
}
