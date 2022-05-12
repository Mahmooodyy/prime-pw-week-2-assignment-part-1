// REQUIRED FEATURES:
let firstName = 'Mahmoud '

let lastName = 'Mahmoud'

let fullName = firstName + lastName

console.log (fullName);

let luckyNumber = 5

console.log ('My name is ', fullName, 'and I think the number', luckyNumber, 'is a winner!' );

let adventurous = true

let favFood = "Pasta"

let myPets = 0

let friendsPets = 1
 
console.log(myPets);

myPets += 2

console.log(myPets);

const allowedPets = 2

if (adventurous == true) {
    console.log("Adventures are great!");
} else {
    console.log("How about we stay home?");
}

if (luckyNumber ==5 && adventurous == true) {
    console.log('Roll the dice!');
} else {
    console.log("Don't roll");
}

if (myPets<allowedPets) {
    console.log("I can have more pets");
} else if (myPets == allowedPets) {
    console.log("I have enough pets.");
}
else { (myPets>allowedPets) 
    console.log("Oh no, I have too many pets!");    
}


// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios. 
// console.log `mostPets` after the conditional has run.

var mostPets

if (myPets > friendsPets) {
    mostPets = myPets
} else {
    mostPets = friendsPets
}

console.log(mostPets);

// 17 - Write a *switch* statement that logs:
//      "First is the worst" if your lucky number is 1
//      "Second is the best" if your lucky number is 2
//      "Third is the one with the polka dot dress" if your lucky number is 3
//      Otherwise, log "Luck is what happens when preparation meets opportunity"
//      You'll need to research how to use switch statements!

switch (luckyNumber) {
    case 1:
        console.log("First is the worst");
        break;
    case 2:
        console.log("Second is the best");
        break;
    case 3:
        console.log("Third is the one with the polka dot dress");
        break;

    default:console.log('Luck is what happens when preparation meets opportunity');
        break;
}

// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!


