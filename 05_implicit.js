// implict converting to string
// numeric string used with + gives string type

var result;

result = '3' + 2;
console.log(result);//"32 o/p"

result = '3' + true;
console.log(result);//3true 0/p

result = '3' + undefined;
console.log(result);// 3undefined 0/p

result = '3'+ null;
console.log(result); //3null o/p

//implicit string cnversion to number
 

var result;

result = '4' - '2';
console.log(result) ;//2 o/p

result ='4' - 2;
console.log(result);// 2 o/p

result = '4'*2;
console.log(result);// 8 o/p

result = '4'/2;
console.log(result); // 2 o/p

// Undefined used with number,boolean or null NaN
//Arithmatic used with number,boolean or null gives NaN

 result = 4 + undefined;
console.log(result); //NaN o/p

result = 4 - undefined;
console.log(result); //NaN o/p

result = true + undefined;
console.log(result);// NaN o/p
 

result = null + undefined;
console.log(result);// NaN o/p

/// Explicit Conversion: convert number string and boolean values to number 
//in that case we can use number ();
// String to number
var result = Number('324');
console.log(result); // 324 o/p

result = Number('324-1');
console.log(result);

// boolean to number
result = Number(true);
console.log(result);

result = Number(false)
console.log(result);

// Explicit conversition:string to Number using + operator

var numberInstring = "100";
console.log(typeof numberInstring);

var myNumber = +numberInstring;
console.log(typeof myNumber);

var myNumber =100;
console.log(typeof myNumber);
var afterConversion = myNumber.toString();
console.log(typeof afterConversion);