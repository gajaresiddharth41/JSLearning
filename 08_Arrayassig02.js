const arrayNumbers =[20,31,40,25,23,11,29,9,60,2,11];

console.log(`total elements in array is ${arrayNumbers.length}`);
console.log(`=======================================`);

console.log("First element and last element in array is" , arrayNumbers[0],"and",arrayNumbers[arrayNumbers.length-1]);
console.log(`================================================`);

console.log(`the third last element is "${arrayNumbers[arrayNumbers.length-3]}"`);
console.log("====================================================");

console.log(`Even numbers in the arrar`);
for (const index  in arrayNumbers) {
   if (arrayNumbers[index]%2===0) {
    console.log(arrayNumbers[index]);
   }  
}
console.log("==============================");

console.log("odd numbers in array");
for (const index in arrayNumbers) {
    if (arrayNumbers[index]%2!=0) {
        console.log(arrayNumbers[index]);
        
    }
}
console.log(`===================================`);

let sum = 0;
console.log(`odd position are in the array`);
 for (let index = 0; index < arrayNumbers.length; index++) {
      sum += arrayNumbers[index]
    
 }
 console.log(`the sum of all array element is ${sum}`);
console.log(`============================================`);

for (const index in arrayNumbers) {
    if (arrayNumbers[index]%5===0) {
       console.log(arrayNumbers[index]);
        
    }
}
function searchEle(value) {
    console.log("===============================================");
    if (arrayNumbers.includes(value)) {
      console.log(`Yes The Element "${value}" is available in array`);
    }else{
      console.log(`No The Element "${value}" is NOT available in array`);
    }
  }
  searchEle(115)
  searchEle(23)
  
  console.log("===============================================");
  arrayNumbers.splice(3,0,55,66)
  console.log(arrayNumbers);
  
  console.log("===============================================");
  arrayNumbers.splice(4,3)
  console.log(arrayNumbers);