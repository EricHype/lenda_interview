var containerDef = require("../test-container");
var container = new containerDef();
var app = require('../../app')(container);
var supertest = require('supertest');
var assert = require("assert");

describe("Game routes", function() {
    
    it("should create a game on post", function(done){
    
        supertest(app)
                .post('/api/v1/game')
                .send()
                .expect(200)
                .end(function(err, res){
                    assert.equal(res.body.id, 1);
                    assert.equal(res.body.board.length, 5);
                    assert.equal(res.body.score, 0);
                    assert.equal(res.body.words.length, 0);
                    done();
                });
    });
    
    it("should return 404 getting game if ID is incorrect", function(done){
    
        supertest(app)
                .get('/api/v1/game/2020')
                .send()
                .expect(404)
                .end(function(err, res){
                    assert.equal(res.text, "Game not Found");
                    done();
                });
    });
    
    it("should return game if ID is correct", function(done){
        
        container.gameRepository.createNewGame()
        .then(function(game){
            
            supertest(app)
                .get('/api/v1/game/' + game.id)
                .send()
                .expect(200)
                .end(function(err, res){
                    assert.equal(res.body.id, game.id);
                    assert.equal(game.board.length, res.body.board.length);
                    for(var i=0; i<game.board.length; i++){
                        assert.equal(game.board[i], res.body.board[i]);
                    }
                    
                    done();
                });
        });
    });
    
    it("should return 400 adding word to game if word is missing from body", function(done){
        
        container.gameRepository.createNewGame()
        .then(function(game){
            supertest(app)
                .post('/api/v1/game/' + game.id)
                .send()
                .expect(400)
                .end(function(err, res){
                    assert.equal(res.text, "Word is required");
                    done();
                });
        });
    });
    
    it("should return 404 adding word to game if game id is invalid", function(done){
        
        supertest(app)
            .post('/api/v1/game/' + 999999999)
            .send({ word: "WORD", score: 4})
            .expect(404)
            .end(function(err, res){
                assert.equal(res.text, "Game not Found");
                done();
            });
    });
    
    
    it("should return 406 adding word to game if word is not in dictionary", function(done){
        
        container.gameRepository.createNewGame()
        .then(function(game){
            supertest(app)
                .post('/api/v1/game/' + game.id)
                .send({ word: "NOTAWORD", score: 4})
                .expect(406)
                .end(function(err, res){
                    assert.equal(res.text, "Word is not in the dictionary");
                    done();
                });
        });
    });
    
    it("should return 400 adding word to game if valid word not on board", function(done){
        
        container.gameRepository.createNewGame()
        .then(function(game){
            supertest(app)
                .post('/api/v1/game/' + game.id)
                .send({ word: "AARDVARK", score: 4})
                .expect(400)
                .end(function(err, res){
                    assert.equal(res.text, "Word is not playable on this game board");
                    done();
                });
        });
    });
    
     it("should return 409 adding word to game if word already played", function(done){
        
        container.gameRepository.createNewGame()
        .then(function(game){
            game.words.push({ word: "CAT", score: 1});
            return container.gameRepository.updateGame(game);
        })
        .then(function(game){
            supertest(app)
                .post('/api/v1/game/' + game.id)
                .send({ word: "CAT", score: 1})
                .expect(409)
                .end(function(err, res){
                    assert.equal(res.text, "Word is a duplicate");
                    done();
                });
        });
    });
    
    it("should play a word if it's valid", function(done){
        container.gameRepository.createNewGame()
        .then(function(game){
            supertest(app)
                .post('/api/v1/game/' + game.id)
                .send({ word: "CAT", score: 1})
                .expect(200)
                .end(function(err, res){
                    assert.equal(res.body.word, "CAT");
                    assert.equal(res.body.score, 1);
                    done();
                });
        });
    });
});