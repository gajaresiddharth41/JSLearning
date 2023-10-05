
let arrayNumber = [22,11,44,55,77,33];
for (let index = 1; index < arrayNumber.length; index+=2) {
    console.log(`Even elements are  in given array ${arrayNumber[index]}`);
    
}
console.log(`==========================================`);
let sum = 0;
for (let index = 0; index < arrayNumber.length; index++) {
    sum += arrayNumber[index];
    
}
console.log(`sum of array Elements${arrayNumber} is "${sum}"`);