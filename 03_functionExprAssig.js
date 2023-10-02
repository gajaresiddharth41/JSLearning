var square = function (value) {
  return value * value;
  //function Expression
};
var result = square(5);
console.log(`the square of 5 is : ${result}`);
var result = square(6);
console.log(`the square of 6 is:${result} `);
var result = square(25);
console.log(`the square of 25 is :${result}`);
var result = square(100);
console.log(`the square of 100 is : ${result}`);
var result = square(67);
console.log(`the square of 67 is : ${result}`);
var result = square(89);
console.log(`the square of 89 is : ${result}`);
var result = square(59);
console.log(`the square of 59 is:${result} `);
console.log("=========================================");

console.log("2==>");

function variableName() {
  console.log(typeof variableName);
}
variableName();
console.log("================================================");

console.log("3===>");

var area = function (length, width) {
  return length * width;
};
var result = area(499, 917);
console.log(result);
console.log("=================================================");

console.log("4===>");

var swapValues = function (value1, value2) {
  console.log("before swap:", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("after swap:", value1, value2);
};
swapValues("mahi", "Raina");
swapValues("55", "77");
console.log("==============================================");

console.log("5===>");
var strHandon = function () {
  var str = "JS the most popular language of internet";
  var totalLength = str.length;
  console.log("total character in the string:", totalLength);

  console.log("b==>");
  var str= "JS the most popular language of internet : "; //01234 indexing order of strings
  console.log("character at 6 :", str.charAt(6));

  var str;
  console.log("character at:", str.charAt(11));

  console.log("c===>");
  var strHandon = str.charAt(str.length-1);
  console.log(`the last character is:t ${strHandon}`);

  var strHandon = str.charAt(0);
  console.log(`very 1st character is :${strHandon}`);
 
  var strHandon = str.charAt(str.length - 3);
  console.log(`the last third char is : ${strHandon}`);

  var strHandon;
  // var words = str.split(" ");
  // console.log(words);
  console.log(`total words is: ${words.length}`);
  console.log( `square of :${ 7*7 }`);


}
strHandon();
// var str = "I am UI Developer";
// var words = str.split(" ");
// console.log(words);
// console.log('Total words is: ', words.length);
// // console.log(typeof words);
// console.log(`Total words is: ',${ words.length}`);










