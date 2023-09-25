var readline = require('readline-sync');

console.log("-----Welcome to BRO calculator-----");
console.log("");
console.log("Calculate your bro love level")
console.log("");

var bro1 = readline.question("Insert first bro: ");
var bro2 = readline.question("Insert second bro: ")

var random_number = Math.floor(Math.random() * 101);

console.log(`BRO love level between ${bro1} and ${bro2} is ${random_number}`);
console.log();

if(random_number <= 20){
    console.log("This aint yo brotha")
}
if(random_number > 20 && random_number < 50){
    console.log("You are like a trojan horse, there is something in it")
}
if(random_number > 50 && random_number < 80){
    console.log("You better start sayin no homo")
}
if(random_number > 80){
    console.log("Kiss your homie goodnight")
}

console.log();