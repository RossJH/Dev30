
var someName = 'bob';
var food = 'burgers';

console.log(`My name is ${someName} and i like ${food}.`);

console.log(Math.min(4, 5343, 123, 3));

var num1 = 342;
var num2 = 3453;

console.log(Math.min(num1, num2));

// --------------------------------------------------- // 

// min
var num1 = 342;
var num2 = 3453;

Math.min(num1, num2); // 342

// max
var num1 = 342;
var num2 = 3453;

Math.max(num1, num2); // 3453

// floor
Math.floor(7.56); // 7

// ceil
Math.ceil(7.56); // 8

// round
Math.round(3.44); // 3

// random
Math.floor(Math.random() * 100); // Random number between 0 and 100


// --------------------------------------------------- // 

// toUpperCase
'aaron'.toUpperCase(); // 'AARON'

// toLowerCase
'AARON'.toLowerCase(); // 'aaron'

// charAt
'Aaron'.charAt(0) // 'A'

// includes
const sentence = 'The quick brown bear jumps over the lazy dog.';
const word = 'fox';

console.log(sentence.includes(word)); // true




// KELVIN WEATHER PROJECT // 
// --------------------------------------------------- // 


// 1. Kelvin weather prediction.
const kelvin = 293;

// 3. Value of Celcius
const Celcius = kelvin - 273;
console.log(Celcius);

// 5. Calculate Farenheight using math. 
var Fahrenheit = Celcius * (9 / 5) + 32;
console.log(Fahrenheit);

// 7. Rounding down Farenheit decimal.
console.log(Math.floor(Fahrenheit));

// 9. Logging the temperature. 
console.log(`The temprature is ${Math.floor(Fahrenheit)} degrees Fahrenheit.`);



// ---------------------------------------------//
// Additional calculations in Newton.
Newton = Celcius * (33 / 100);
console.log(Newton);

// Rounding down Newton decimal.
console.log(Math.floor(Newton))

// Providing Sydney with Kelvin's Newton weather update. 
console.log(`The Newton temperature today in Sydney is ${Math.floor(Newton)}`)