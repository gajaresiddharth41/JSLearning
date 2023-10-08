// // Object creation using object literals
// let person = {
//     name: "Jenny",
//     age: 22,
//     isMarried: true, 
//     show:function(){
//      console.log(`Hi Hello, How are you ?`);
//     }
//  };
//  console.log(typeof person);
//  console.log(person);
 
//  // Property access
//  //1. Dot Notation
//  let personaName= person.name;
//  console.log(`Person name is: ${personaName}`);
 
//  console.log(`Person age is: ${person.age}`);
 
//  //1. [] Notation
//  let nameOfPerson = person["name"]
//  console.log(`Person name is: ${nameOfPerson}`);
 
//  console.log(`Adding property in object`);
//  person.city = "Pune";
//  console.log(person);
//  //console.table(person);
 
//  console.log(`Update property in object`);
//  person.age = 20;
//  console.log(person);
 
//  console.log(`Delete property from an object`);
//  delete person.age;
//  console.log(person);
 
//  console.log(`Adding method in an object`);
//  person.show();
//  person.display=function(){
//      console.log(`I am inside display function`);
//  }
//  console.log(person);
//  person.display();

//  console.log(`====== Nested Object =======`);
// const personElon = {
//     name: "Elon Musk",
//     age: 54,
//     totalCompany: 9,
//     companies: {
//         tesla: "300B USD",
//         twitter: "150B USD",
//         spacex: "200B USD"
//     },
//     kidsName: ["Deny", "Weny", "Rony", "Randy"]
// }

// console.log(personElon.companies.tesla);
// console.log(personElon.companies.tesla);
// console.log(personElon.kidsName[0]);
// console.log(personElon.kidsName.length);
// // "stew"
// personElon.kidsName.push("stew");

// for (const kid of personElon.kidsName) {
//     console.log(kid);
// }


let simple = {
    name : "jeeny",
    age : 22,
    city : "pune",
    ismarried : false,
    
};
// console.log(simple);
// console.log(typeof simple);

//property access
//1.DOT Notation
//2.[]Bracket Notation
 simple.name;//Dot notation
console.log(simple);

console.log(`person age is ${simple.age}`);


simple["name"];
console.log(simple);

// adding property
simple.state="maharastra";
console.log(simple); // adding property  

console.log(`update property in object`);
simple.age=23;
console.log(simple);

console.log(`Delete property from object`);
delete simple.age;
console.log(simple);  /// delete property

console.log(`empty object `);
let empty = {

}
empty.name="sid";
console.log(empty);

// console.log(`Adding method in object`);
// personalbar.show = function(){
//     console.log(`hey i am sid`);
// console.log(personalbar);
// }

console.log(`Nested object`);
const PersonElon = {
      name:"Elon musk",
      age : 45,
      totalCompanies: 9,
      Companies:{

        tesla :{
            companyname: "Tesla",
             totalemployee : 4500,
             location:"USA",
           
        },
            

      twitter : "150B USD",//nested object
      specx : "200B USD"
        
      },
      kidsName : ["Danny","tony","Randy","jeny"]

      
 
}
console.log(PersonElon.Companies.tesla)
console.log(PersonElon.kidsName[0]);
console.log(PersonElon.kidsName.length);
console.log(PersonElon.kidsName.push("stew"));


console.log(PersonElon.Companies.tesla.location);