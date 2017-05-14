function BoardFactory(diceModel){
    this.diceModel = diceModel;
}


//should be moved to a service as model objects really shouldn't have this sort of logic
BoardFactory.prototype.getNewBoard = function(){
    var boardRowArray = ["AAAAA", "AAAAA", "ACATA", "AAAAA", "AAAAA"];
    return boardRowArray;
};

module.exports = BoardFactory;