
var serviceDef = require("../../service/word-score-service");
var service = new serviceDef();
var assert = require("assert");


describe("word score service", function() {

    it("should return null for a null input", function(done){
            var score = service.getScore("Yo");
            assert.equal(score, null);
            done();
     });


     it("should return null for a word less than 3 digits in length", function(done){
            var score = service.getScore("Yo");
            assert.equal(score, null);
            done();
     });

    it("should return 1 for a word 3 digits in length", function(done){
            var score = service.getScore("Hey");
            assert.equal(score, 1);
            done();
     });
     
     it("should return 2 for a word 4 digits in length", function(done){
            var score = service.getScore("Heyo");
            assert.equal(score, 2);
            done();
     });
      it("should return 3 for a word 5 digits in length", function(done){
            var score = service.getScore("Board");
            assert.equal(score, 3);
            done();
     });
      it("should return 4 for a word 6 digits in length", function(done){
            var score = service.getScore("Cobras");
            assert.equal(score, 4);
            done();
     });
      it("should return 5 for a word 7 digits in length", function(done){
            var score = service.getScore("Session");
            assert.equal(score, 5);
            done();
     });
     it("should return 6 for a word 8 digits in length", function(done){
            var score = service.getScore("Sessions");
            assert.equal(score, 6);
            done();
     });
     it("should return 6 for a word more than 8 digits in length", function(done){
            var score = service.getScore("Texturing");
            assert.equal(score, 6);
            done();
     });
});