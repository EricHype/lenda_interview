
module.exports = function(){
    
    var container= {};

    container.diceModel = require("../model/dice");
    container.gameModel = require("../model/game");
    
    var boardFactoryDef = require("./mocks/board-factory-mock");
    container.boardFactory = new boardFactoryDef(container.diceModel);
    
    var gameRepoDef = require("../repository/game-repository");
    container.gameRepository = new gameRepoDef(container.boardFactory, container.gameModel);

    var boardWordServiceDef = require("../service/board-word-service");
    container.boardWordService = new boardWordServiceDef();
    
    var dictionaryServiceDef = require("../service/dictionary-service");
    container.dictionaryService = new dictionaryServiceDef("test-dictionary.txt");
    
    var wordScoreServiceDef = require("../service/word-score-service");
    container.wordScoreService = new wordScoreServiceDef();

    return container;
};