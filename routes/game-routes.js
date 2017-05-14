module.exports = function(apiRoutes, gameRepository, dictionaryService, boardWordService, wordScoreService){
    
    apiRoutes.post("/api/v1/game/:id", addMoveToGame);
    function addMoveToGame(req, res){
        
        if(!req.body.word){
            return res.status(400).send("Word is required");
        }
        
        gameRepository.getGameById(parseInt(req.params.id))
        .then(function(game){
            if(!game){
                return res.status(404).send("Game not Found");
            }
            
            if(!dictionaryService.containsWord(req.body.word)){
                return res.status(406).send("Word is not in the dictionary");
            }
            
            if(!boardWordService.isWordValid(game.board, req.body.word)){
                return res.status(400).send("Word is not playable on this game board");
            }
            
            for(var i=0; i<game.words.length; i++){
                if(game.words[i].word == req.body.word){
                    return res.status(409).send("Word is a duplicate");
                }
            }
            
            var score = wordScoreService.getScore(req.body.word);
            var wordObj = { word: req.body.word, score: score};
            game.words.push(wordObj);
            gameRepository.updateGame(game);
            
            return res.status(200).json(wordObj);
        })
        .catch(function(err){
            console.log(err);
            return res.status(500);
        });
    }
    
    apiRoutes.get("/api/v1/game/:id", getGame);
    function getGame(req, res){
        
        if(!req.params.id){
            return res.status(404).send("Game not Found");
        }
        
        //potential error with parseint if non-numeric is passed, fix later
        gameRepository.getGameById(parseInt(req.params.id))
        .then(function(game){
            if(!game){
                return res.status(404).send("Game not Found");
            }
            
            return res.status(200).json(game);
        })
        .catch(function(err){
           console.log(err); 
           return res.status(500);
        });
    }
    
    apiRoutes.post("/api/v1/game", createNewGame);
    function createNewGame(req, res){
        gameRepository.createNewGame()
        .then(function(game){
            return res.status(200).json(game);
        })
        .catch(function(err){
          console.log(err);
          return res.status(500);
        });
    }
    
    
};