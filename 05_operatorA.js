
function squareOfWordLength(word){
    var length =word.length;
    console.log(`Given strring is:${word}`);
    console.log(`length of string is:${length}`);
    var square = length*length
    console.log(`the square of length is :${square}`);
    

}
squareOfWordLength("JavaScript");
console.log(`==============================`);
squareOfWordLength("Google chrome");
console.log(`==================================`);
squareOfWordLength("Developer Smart");

console.log(`================================`);

function str(){
     var str1 = "I am Angular Developer";
     var words = str1.split('');
     var totalwords = words.length;
     var totalLength = str1.length;

     var result1 =totalLength / totalwords;
     var result2 = totalLength*totalwords;
     console.log(`length of string is:${str1.length} amd number of word in string is ${totalwords} `);
     console.log(`total length divided by total words:${result1}`);
     console.log(`total length multiplied by total words:${result2}`);
}
str();