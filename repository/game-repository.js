var Promise = require('bluebird');
var nextGameId = 1;
var gamesMap = new Map();

function GameRepository(boardFactory, gameModel){
    this.boardFactory = boardFactory;
    this.gameModel = gameModel;
}

GameRepository.prototype.createNewGame = function(){
    var board = this.boardFactory.getNewBoard();
    var game = new this.gameModel(nextGameId, board, 0, []);
    
    gamesMap.set(nextGameId, game);
    
    nextGameId += 1;
    return Promise.resolve(game);
};

GameRepository.prototype.getGameById = function(gameId){
    return Promise.resolve(gamesMap.get(gameId));
};

GameRepository.prototype.updateGame = function(game){
    gamesMap.set(game.id, game);
    return Promise.resolve(game);
};

module.exports = GameRepository;
