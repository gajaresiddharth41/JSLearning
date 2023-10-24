 let bankSbi = {
    Name : "SBI",
    IFScode : "SBI0343",
    AccNo : 98767755554,
    userid : 432225566,

 }
 console.log(bankSbi);
 let bankLocation = {
    street : "bhosale chuk",
    city : "pandharpur",
    pin_code : "413304"
 }

 Object.assign(bankSbi,bankLocation);
 
 console.log(bankSbi);

 let rateOfInterest = {
    homeLoan : "10%",
    personalLoanInterest : "15%",
    duelLoanInterest : "18%"
 }

let sbiDetails =   Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.log(`Merging object banksbi,bankLocation,rateofInterest in sbiDetails`);
console.log(sbiDetails);

console.log(`Traversing of an object SbiDetails`);
 for (const key in sbiDetails) {
    console.log(key,sbiDetails[key]);
 }