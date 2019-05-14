
var swing = function(){
    return Math.floor(Math.random() * 11);
}

var attack = function(monsterHP) {
    var damageDealt = swing();
    console.log("You dealt", damageDealt, "damage!");
    monsterHP = monsterHP - damageDealt;
    console.log("The monster has", monsterHP, "remaining.");
    return monsterHP;
}
    
var defend = function(myHP) {
    var damageTaken = swing();
    console.log("You took", damageTaken, "damage!");
    myHP = myHP - damageTaken;
    console.log("You have", myHP, "remaining.");
    return myHP;
}
    
module.exports = {
    attack: attack,
    defend: defend
}