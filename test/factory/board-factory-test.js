
var diceModel = require("../../model/dice");
var boardFactory = require("../../factory/board-factory");
var assert = require("assert");


describe("board factory", function() {

     it("should generate a 5x5 board array", function(){
        
        var factory = new boardFactory(diceModel);
        
        var result = factory.getNewBoard();
        
        assert.equal(result.length, 5);
        for(var i=0; i< result.length; i++){
            assert.equal(result[i].length, 5);
        }
        
        
     });

});