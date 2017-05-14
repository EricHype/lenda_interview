function dice(characterString){
    this.characterString = characterString;
    this.characterArray = characterString.split("");
}

dice.prototype.getRandomLetter = function(){
    var index = Math.floor(Math.random() * this.characterArray.length);
    return this.characterArray[index];
};


module.exports = dice;