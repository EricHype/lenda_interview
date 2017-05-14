var serviceDef = require("../../service/dictionary-service");
var service = new serviceDef("test-dictionary.txt");
var assert = require("assert");


describe("dictionary service", function() {

    before(function(done){
        
        while(!service.isReady()){
            
        }
        
        done();
    });


    it("returns true if it contains a word", function(done){
        var result = service.containsWord("ABELES");
        assert.equal(true, result);
        done();
    });

    it("returns false if it does not contain a word", function(done){
        var result = service.containsWord("NOTAWORD");
        assert.equal(false, result);
        done();
    });
});