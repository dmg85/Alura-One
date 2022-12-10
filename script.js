// declare variables

let year = 2022;

let ageJuan = (year - 2000);
let ageSony = (year - 1984);
let ageHelen = (year - 1990);

let juan = ageJuan;
let sony = ageSony;
let helen = ageHelen

let ageCalculator = (juan + sony + helen)/3;

// Math.floor() rounds down if the value is 0.5 or less
// Math.round() rounds up if value > 0.5
let floorCalc = Math.round(ageCalculator);


console.log("The average age of the three is: " + floorCalc);



//
