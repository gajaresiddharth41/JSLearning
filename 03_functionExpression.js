

var show = function () {
    console.log("Inside function Express");
    
}
show();  //function Expression

var add = function(value1,value2){  // Parameter passing
       console.log(value1+value2);
}
add(100,300); // function Expression // argument passing the valuess

var square = function(value){
    return value*value; // Annonymus function
}
var result = square(25);
console.log(`square of 25 is ${result}`);// complete function expression