   let  personalDetails = {
        Name : "Siddheshwar Gajare",
        DOB : 22/2/2002,
        Address : "Pandharpur",
        Email : "abc@gmail.com",
        Age : 22,

}

let collageDetails = {
        collageName : "kpc collage",
        collageAddress : "Pandharpur",
        Degree : "BCA",
        University : "Solapur university",
        
}

 const sid = Object.assign(personalDetails,collageDetails);
 console.log(sid);
 console.log(`===================================`);

 let newarryss = ["Sangram","Balaji","Tejas","Mauli","Rushikesh","Vivek","Avi"];
 console.log(newarryss);
 Object.freeze(newarryss);
 newarryss.Name= "sid";
 console.log(newarryss);

console.log(`========================================`);
for (const key of newarryss) {
    console.log(key,newarryss[key]);
}

console.log(`====revers the word=====`);
let company = "Codemind Technology"
let reverse = '';
for (let index = company.length-1; index >=0; index--) {
        let char = company.charAt(index);
        if (char== '') {
           break;
        }
        else{
                reverse = reverse + char;

        }
}
console.log(reverse);