 array_number = [20,11,40,25,37,49,9,90,60,2,19];
 let sum = array_number.reduce((runningnum,currentvalue)=>{
    return runningnum+currentvalue
 },0);
  console.log(sum);


 let sum2 = 0;
 for (let j = 0; j < array_number.length; j++) {
      sum2=sum2+array_number[j]
    
 }
 console.log(sum2);