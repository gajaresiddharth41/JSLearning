let s = ()=>{
    console.log("Good Morning,Today is Wednesday");
};
s();
console.log(`====================================`);

let multi = (a,b,c=1) =>{
    let result = a*b*c;
    console.log(result);
};
multi(5,5,2);
multi(10,4);

console.log(`========================================`);
 let addi =(n1,n2,n3,n4,n5,)=>{
   let result = n1+n2+n3+n4+n5;
   console.log(`the addition is ${result}`);
 };
 addi(100,100,200,349,756);
 console.log(`==============================`);

 let result2 = addi("I am","learning","ES6","features","in depth");
 console.log(`Addition of String is ${result2}`);
 