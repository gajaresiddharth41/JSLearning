var greet = 'Good Morning';

console.log("========= length property =============");
var totalLength = greet.length;
console.log('Length of the string is: ', totalLength);

console.log("========== charAt() =============== ");
var charAt0 = greet.charAt(0);
console.log("Character at index 0 is: ", charAt0);

var greetchar = greet.charAt(5);
console.log(greetchar);

console.log('Char stored at index 5 is: ', greet.charAt(5));

// var lastIndexChar = greet.charAt(greet.length-1);
// console.log('Last index char is: ', lastIndexChar);

var thirdLastChar = greet.charAt(greet.length-3);console.log("third index char is :",thirdLastChar);

greet.replace("Morning","Afternone");
console.log("After replacing morning with afternoon, new value of variable greet:",greet)

console.log("========== replace =============== ");
var result =greet.replace('Morning', "Afternoon");
console.log(result);
var result = greet.replace(' ', "-");
console.log(result);

greet.toUpperCase();




