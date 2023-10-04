var voteEligible = function(age){
    var result=+age;
    console.log("");
    if (age<0 || age>130 || isNaN(result)) {
        console.log(`the given age is ${age} "that is invalid input"` );
    }else{
        if (age<18) {
            console.log(`the given age is ${age} "Your not eligible for vote"`);
            
        }
        else{
            console.log(`you are eligible to vote ${age}`);
        }
    }
        
    
}

voteEligible(45);
voteEligible(17);
voteEligible(20);
voteEligible(8);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);

