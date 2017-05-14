function BoardWordService(){
    
}


BoardWordService.prototype.isWordValid = function(board, word){
    //since words are not passed with ordinals, we have to scan the entire input
    //this will be a radial search algorithm 
    
    var char2dArray = [];
    for(var x=0; x< board.length; x++){
        char2dArray.push(board[x].split(""));
    }
    var wordArray = word.toUpperCase().split("");
    
    //now we have a 5x5 char array and array of word characters, go ltr, top to bottom until we find a start match
    for(var i=0; i< 5; i++){
        for(var j=0; j<5; j++){
            if(char2dArray[i][j] == wordArray[0]){
                if(radialSearch(char2dArray, wordArray, i, j, 1)){
                    return true;
                }
            }
        }
    }
  
    return false;  
};

function radialSearch(boardArray, wordArray, startX, startY, currentLength){
    
    if(currentLength == wordArray.length){
        return true;
    }
    
    //left
    if(startY > 0){
        if(boardArray[startX][startY -1] == wordArray[currentLength]){
            if(radialSearch(boardArray, wordArray, startX, startY - 1, currentLength + 1)){
                return true;
            }
        }
    }
    
    //bottom
    if(startX < 4){
        if(boardArray[startX +1][startY] == wordArray[currentLength]){
            if(radialSearch(boardArray, wordArray, startX + 1, startY, currentLength + 1)){
                return true;
            }
        }
    }
    
    //right
    if(startY < 4){
        if(boardArray[startX][startY+1] == wordArray[currentLength]){
            if(radialSearch(boardArray, wordArray, startX, startY+1, currentLength + 1)){
                return true;
            }
        }
    }
    
    //top
    if(startX > 0){
        if(boardArray[startX-1][startY] == wordArray[currentLength]){
            if(radialSearch(boardArray, wordArray, startX-1, startY, currentLength + 1)){
                return true;
            }
        }
    }
    
    return false;
    
}
module.exports = BoardWordService;