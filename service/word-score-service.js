function WordScoreService(){
    
}

WordScoreService.prototype.getScore = function(word){
    if(!word){
        return null;
    }
    
    var length = word.length;
    
    if(length < 3){
        return null;
    }
    if(length == 3 ){
        return 1;
    }
    if(length == 4){
        return 2;
    }
    if(length == 5){
        return 3;
    }
    if(length == 6){
        return 4;
    }
    if(length == 7){
        return 5;
    }
    if(length >=8 ){
        return 6;
    }
    
    return 0;
};

module.exports = WordScoreService;