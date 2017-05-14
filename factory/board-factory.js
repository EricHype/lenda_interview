
function BoardFactory(diceModel){
    this.diceModel = diceModel;
    
    //this could be moved to a boardRow object but leaving it here for now
    this.diceArray = [
            new diceModel("aaafrs"),
            new diceModel("aaeeee"),
            new diceModel("aafirs"),
            new diceModel("adennn"),
            new diceModel("aeeeem"),
            new diceModel("aeegmu"),
            new diceModel("aegmnn"),
            new diceModel("afirsy"),
            new diceModel("bjkqxz"),
            new diceModel("ccenst"),
            new diceModel("ceiilt"),
            new diceModel("ceilpt"),
            new diceModel("ceipst"),
            new diceModel("ddhnot"),
            new diceModel("dhhlor"),
            new diceModel("dhlnor"),
            new diceModel("dhlnor"),
            new diceModel("eiiitt"),
            new diceModel("emottt"),
            new diceModel("ensssu"),
            new diceModel("fiprsy"),
            new diceModel("gorrvw"),
            new diceModel("iprrry"),
            new diceModel("nootuw"),
            new diceModel("ooottu")
        ];
}


//should be moved to a service as model objects really shouldn't have this sort of logic
BoardFactory.prototype.getNewBoard = function(){
    var boardRowArray = [];
    var rowLength = 5;
    var numberOfRows = 5;
    
    for(var i =0; i< numberOfRows; i++ ){
        var rowText = "";
        for(var j=0; j< rowLength; j++){
            rowText += this.diceArray[(i * rowLength) + j].getRandomLetter();
        }
        boardRowArray.push(rowText.toUpperCase());
    }
    
    return boardRowArray;
};

module.exports = BoardFactory;