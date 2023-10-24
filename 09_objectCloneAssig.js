 let bankSbi = {
    name: "SBI",
    IFSCcode : "sbi022",
    Location : "Pandharpur",
    ManagerName : "s.p raut",
}
// console.log(bankSbi.name);
console.log(bankSbi);
console.log(`=============================`);

let bankLocation = {
    street : "Bhosale road",
    city : "Solapur",
    Pin : "413304",

}
Object.assign(bankSbi,bankLocation)
console.log(bankSbi);  // Bank SBI

let rateOfInterest ={
    homeLoan : '10%',
    personalLoanInterest :'13%',
    dueInterest :'15%',
}

const sbidetails = Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.log(`meraging objects in sbiDetails`);
console.log(sbidetails);


console.log(`==========Travesing the object===========`);
for (const key in sbidetails) {
    console.log(key,sbidetails[key]);
        
    
}