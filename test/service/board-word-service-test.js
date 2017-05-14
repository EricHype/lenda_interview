var serviceDef = require("../../service/board-word-service");
var service = new serviceDef();
var assert = require("assert");


describe("board word service", function() {

    
    it("should find a word that exists in horizontal direction", function(done){
        
        var boardArray=["AAAAA", "AAAAA", "ACATA", "AAAAA", "AAAAA"];
        var doesExist = service.isWordValid(boardArray, "CAT");
        assert.equal(true, doesExist);
        done();
    });
    
    
    it("should find a word that exists vertically", function(done){
        var boardArray=["AAAAA", "AACAA", "AAAAA", "AATAA", "AAAAA"];
        var doesExist = service.isWordValid(boardArray, "CAT");
        assert.equal(true, doesExist);
        done();
    });
    
    it("should find a word that exists jaggedly", function(done){
        var boardArray=["ABOAA", "AAAAA", "AARDA", "AATAA", "AAAAA"];
        var doesExist = service.isWordValid(boardArray, "BOARD");
        assert.equal(true, doesExist);
        done();
    });
    
    it("should not find a word that isn't there ", function(done){
        var boardArray=["ABOAA", "AAAAA", "AARDA", "AATAA", "AAAAA"];
        var doesExist = service.isWordValid(boardArray, "QUACK");
        assert.equal(false, doesExist);
        done();
    });
    
    it("should find a word that almost exist", function(done){
        var boardArray=["ABOAA", "AAAAA", "AARTA", "AATAA", "AAAAA"];
        var doesExist = service.isWordValid(boardArray, "BOARD");
        assert.equal(false, doesExist);
        done();
    });
});