
// function jennyHomework (callback){
//     console.log(`jenny stated assignment`);
//     console.log(`in progrss`);
//     console.log(`she completed`);
//     callback();
// }

// let eloncopyhomework = function (){
//     console.log(`thank you jenny`);
//     console.log(`copying`);
//     console.log(`complete`);
// }
// jennyHomework(eloncopyhomework);
// function jennyHomework(callback){
//     console.log(`Jenny started assignments`);
//     console.log('Her assignments solving is in progress');
//     console.log(`Jenny's assignment is completed`);
//     callback();
// }
// let elonCopyHomework = function(){
//     console.log(`Thank you Jenny for calling me back`);
//     console.log('Elon started copying assignments');
//     console.log('Elon copied all assignments');
// }
// jennyHomework(elonCopyHomework);

// console.log(`================================`);
// // 1 sec = 1000 ms
// setTimeout( function(){
//     console.log('Inside callback function');
// }, 5000);
 let sid = "sidharth"
function outer(){
    let outervariable = 200;
    let inner = function inner(){
    let innervar =300;
      console.log(innervar,outervariable,sid);
      
    }
    return inner;
}
outer();
