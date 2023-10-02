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

var thirdLastChar = greet.charAt(greet.length-3);
console.log("third index char is :",thirdLastChar);

greet.replace("Morning","Afternone");
console.log("After replacing morning with afternoon, new value of variable greet:",greet)

console.log("========== replace =============== ");
var result =greet.replace('Morning', "Afternoon");
console.log(result);
var result = greet.replace(' ', "-");
console.log(result);

greet.toUpperCase();

console.log("========== slice() =============== ");
var greet = 'Hello Good Morning!';
var result = greet.slice(6);
console.log(result);
var result = greet.slice(6, 10);
console.log(result);

greet.split("");
var result =greet.split();
console.log(result);

var str = "I am UI developer";

//WAP to count the total number words
var str = "I am UI Developer";
var words = str.split(" ");
console.log(words);
console.log('Total words is: ', words.length);
// console.log(typeof words);
console.log(`Total words is: ',${ words.length}`);



// String template
console.log(`I am "UI" Developer `);
var num1 = 10;
var num2 = 20;
var result = num1 + num2;
console.log("Addition of ", num1, "and ", num2, "is :", result);
console.log(` Addition of ${num1} and ${num2}  is: ${result}`); // Steing template
