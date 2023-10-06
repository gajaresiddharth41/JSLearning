const arrayFruits = ["Banana", "Orange","Apple","Mango","Water Malon"];
let firstelement = arrayFruits[0];

console.log(`the first element is:${firstelement}`);
console.log(` the last element is: ${arrayFruits[arrayFruits.length-1]}`);

console.log(`=======2==================`);
console.log(`adding papaya before the banana`);
arrayFruits.splice(0,0,"Papaya");
console.log(arrayFruits);
console.log(`===================================`);

console.log(`==========3================`);
//removing an item from a specific index in an array
arrayFruits.splice(4, 1) //remove one fruit at position of 5th index (which will be water malon
console.log(` after removing mango:${arrayFruits}`);
console.log(`========================================`);
console.log(`insert element dragon fruit before water malon`);

arrayFruits.splice(4,0,"Dragon fruit");
console.log(arrayFruits);
console.log(`===================================`);
console.log(`replace an element orange with kiwi`);

arrayFruits.splice(2,1,"kiwi");
console.log(arrayFruits);
console.log(`======================================`);

console.log(`log element starting from index 1 to 4`);
const arrayelement = arrayFruits.slice(1,4);
console.log(arrayelement);
console.log(`========================================`);

console.log(`last 3 elements`);
let last = arrayFruits.slice(-3);
console.log(last);