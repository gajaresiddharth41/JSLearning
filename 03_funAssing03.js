function countcharA(str){
       let count = 0;
       for (let index = 0; index < str.length; index++) {
        if (str[index]=== 'a' || str[index]==='A') {
            count++;
        
            
        }
        
       }
       return count;

}


const string1 = "I am Learning JavaScript,The language of internet";
const string2 = "My favourite movie is LAggAn";

const count1 = countcharA(string1);
const count2 = countcharA(string2);

console.log(`Total 'a' or 'A' characters in string1:${count1} `);
console.log(`Total 'a' or 'A' characters in string2:${count2} `);