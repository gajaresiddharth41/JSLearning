console.log(`reversing the array`);
let arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);
console.log(`==========================`);

const sortArray = arrayRollNumbers.sort();
console.log(sortArray);

console.log(`accending order of array`);
const sortan=arrayRollNumbers.sort((a,b)=>{
    return  a>b ? 1 : -1
})
console.log(sortan);

console.log(`greatest number of array`);
console.log(sortan[sortan.length-1]);


console.log(`smallest number of an array is `);
console.log(sortan[0]);

ele = [...new Set(sortan)];
console.log("unique elements in the array");
console.log(ele);

// const str = "How are you mate"; // "HoW ArE YoU MatE"
// const arrayWord = str.split(' ');
// let finalStr = '';
// for (const word of arrayWord) {
//     let firstChar = word.charAt(0).toUpperCase();
//     let lastChar = word.charAt(word.length-1).toUpperCase();
//     // Replace word,  first char by firstChar
//     // Replace word,  last char by lastChar
//     finalStr = finalStr + word;
//     console.log(word, firstChar, lastChar );
// }
// console.log(finalStr);