
let professor = {
    name: 'Siddharth',
    age : 21,
    birthYear : 2001,
    SchoolName: "kvs",
    collageName: "kpc",
    degrees : {
     engineering :"CSC",
     PHD : "Adv Computing",
    },
    
    certificates : ["Hacker rank Participation","Certification in IFE course","Certification in Adv Programming"],

    
};
console.log(professor);
console.log("==============================================");
professor.totalExperience = "14 years";
 console.log(professor);
 console.log("====================================");

professor.certificates.push("Oracle Certified");
console.log(professor);
console.log(`====================================`);

// professor.certificates([professor.certificates.length-1]);
console.log(`Last element in array Certificate is "${professor.certificates[professor.certificates.length-1]}"`);

console.log(`=============================================`);

console.log(professor);
console.log(`============Traverse thr array====================`);

//traverse the array
for (const Certificat of professor.certificates) {
    console.log(Certificat);
}

    






// console.log(professor);
    



