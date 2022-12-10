// required function to include the mdn prompt module
const prompt = require("prompt-sync")();

// Calculate the age difference with your sister


let brother1 = prompt("What's your age = ");

let brother2 = prompt("Whats my age = ");

let agesSum = (ages) => console.log("The difference of age between brothers is " + (brother1 - brother2) + " year");  


agesSum();

