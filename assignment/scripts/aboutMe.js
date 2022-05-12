// REQUIRED FEATURES:
let firstName = 'Mahmoud '

let lastName = 'Mahmoud'

let fullName = firstName + lastName

console.log (fullName);

let luckyNumber = 5

console.log ('My name is ', fullName, 'and I think the number', luckyNumber, 'is a winner!' );

let adventurous = true

let favFood = "Pasta"

let pets = 0

let friendsPets = 1
 
console.log(pets);

pets += 2

console.log(pets);

const allowedPets = 2

if (adventurous == true) {
    console.log("Adventures are great!");
} else {
    console.log("How about we stay home?");
}

if (luckyNumber ==4 && adventurous) {
    console.log('Roll the dice!');
} else {
    console.log("Don't roll");
}

// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"

// 15 - Write a conditional that console logs "I can have more pets!" 
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.

// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios. 
// console.log `mostPets` after the conditional has run.

// 17 - Write a *switch* statement that logs:
//      "First is the worst" if your lucky number is 1
//      "Second is the best" if your lucky number is 2
//      "Third is the one with the polka dot dress" if your lucky number is 3
//      Otherwise, log "Luck is what happens when preparation meets opportunity"
//      You'll need to research how to use switch statements!

// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!


