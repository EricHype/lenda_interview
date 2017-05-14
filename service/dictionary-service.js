var fs = require('fs'), readline = require('readline');;
var path = require('path');

var wordsMap = new Map();
var readyToProcess = false;
var wordsSeen =0;

function DictionaryService(dictionaryFilename){
    
    var dataPath = path.join(__dirname, '..', 'data', dictionaryFilename);

    var rd = readline.createInterface({
        input: fs.createReadStream(dataPath)
    });
    
    rd.on('line', function(line) {
        //console.log(line);
        wordsMap.set(line.trim(), true);
        wordsSeen++;
    }).on('close', () => {
        readyToProcess = true;
    });
}

DictionaryService.prototype.isReady = function(){
    return readyToProcess || wordsSeen > 20; //close event is being intermittent which is concerning.
};

DictionaryService.prototype.containsWord = function(word){
    if(wordsMap.get(word.toUpperCase())){
        return true;
    }
    
    return false;
};

module.exports = DictionaryService;