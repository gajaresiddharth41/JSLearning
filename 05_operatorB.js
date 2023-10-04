
function greaterNumber(num1,num2){
    var result = num1 > num2 ? num1 : num2;
    console.log(`Greater number between ${num1} and ${num2} is: ${result}`);

}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log(`================================`);

function isEvenOrOddNum(num){
    var result =  num%2=== 0 ? "even" : "odd"
    return result;
}
var num1Result = isEvenOrOddNum(29)
console.log(`the number of 29 is ${num1Result}`);
var num2Result = isEvenOrOddNum(44);
console.log(`the number of 44 is ${num2Result}`);
var num3Result = isEvenOrOddNum(0)
console.log(`the number of 0 is ${num3Result}`);
var num4Result = isEvenOrOddNum(101);
console.log(`the number of 101 is ${num4Result}`);
console.log(`=====================================`);

function wordLength(word){
   var result = word.length%2 === 0 ? "Even" : "Odd";
   return result;
}
var lengthOfWord1= wordLength("JavaScript");
console.log(`Length of JavaScript is :${lengthOfWord1}`);
var lengthOfWord2= wordLength("developer");
console.log(`length of developer is :${lengthOfWord2}`);
var lengthOfWord3= wordLength("Google");
console.log(`length of Google :${lengthOfWord3}`);
