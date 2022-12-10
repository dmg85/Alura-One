//required function to include the mdn prompt module
const prompt = require("prompt-sync")();

let wins = prompt("team winnings: ");
let draws = prompt("team draws: ");

let points = wins * 3 + 1;


console.log("The team has a total of " + points + " Points");
