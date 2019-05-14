// Adventure

var fs = require("fs")
var readlineSync = require("readline-sync");

var damage = require("./damage.js");

/**
 * Main Singleton Event Loop
 * @param {*} name
 * @param {*} age
 * @param {*} height
 **/

function Adventure(name, age, height){
    // lexical-scope `this`
    this.name = name;
    this.age = age;
    this.height = height;

    var myHP = 30
    var monsterHP = 20

    var events = function(){
         return Math.floor(Math.random() * 2);
    }

    var fightmonster = function(){
        monsterHP = damage.attack(monsterHP);
        if (monsterHP > 0) {
            myHP = damage.defend(myHP);
        } else { console.log("You are victorious!") }
    }

    var randEvent = function() {
        if (events() == 0){
            console.log("You encounter a monster!");
            var choice = options();
            console.log(choice);
            if (choice == 0){
                if (monsterHP <= 0){ monsterHP = 20; }
                while((myHP > 0) && (monsterHP > 0)){
                    fightmonster();
                }
            } else {
                console.log("You got away.");
            }
        }
        else if (events() == 1){
            console.log("You continue along the path.");
        }
        else { randEvent(); }
    }

    var options = function(){
        var result = 0;
        // Wait for user's response.
        var question = readlineSync.question("What would you like to do? ");
        if (question.toLowerCase() == "fight"){ //https://www.w3schools.com/js/js_popup.asp
            console.log("You chose to fight!");
            result = 0;
        } else {
            console.log("You chose to run!");
            result = 1;
        }
        return result;
    }

    this.bio = function() {
        return console.log("Your name is", this.name,
        ", you are", this.age, "years old and are ", this.height, "ft tall.");
    }

    this.path = function(direction) {
        console.log("You decided to go", direction + ".");
        return randEvent();
    }

}

// fs.open("../assets/name.txt", "r", function(err, fd){ 
//     fs.read(fd, )
// });

fs.readFile("../assets/name.txt", { flag:"r" }, function(err, data){
    var quest = new Adventure(data, 21, 6)
    quest.bio();
    quest.path("north");
})

// var quest = new Adventure("Nate", 21, 6)
// quest.path("north");
