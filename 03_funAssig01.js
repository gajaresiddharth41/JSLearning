
console.log("=========two functions with no arguments");
function Simple(){
    console.log("Good Morning");
}
Simple()

function Second(){
    console.log("This is a JavaScript");
}
Second();

console.log("=========2nd part================");
function personalDetails(firstName,lastName,collageName){
    console.log(" firstName: ",firstName);
    console.log("LastName :",lastName);
    console.log("CollageName :",collageName);

}
personalDetails("Siddharth","Gajare","kpc collage pandharpur");

console.log("========= 3rd part=================");
function swapvalues(Virat,Anushka){
  console.log("Before Swapping===> Virat  Anushka");
  var temp = Virat;
  Virat =  Anushka;
  Anushka=temp; // this will not work as we are trying to assign value of variable which has been declared outside the function scope
  console.log("After Swapping===>",Virat , Anushka);
}
swapvalues("Virat","Anushka");
swapvalues("1000", "2000")

console.log("============4th part=========");
function addThreeValues(){
    
}