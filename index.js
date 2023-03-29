//1. Write a function `fiveToOneHundred` that console logs all numbers from 5 to 100.//Code your solutions in this file
function fiveToHundred(){
    let i 
    for (i=5; i<=100; i=i+1)
    {
        console.log(i)
    }
 }
 console.log(fiveToHundred())
 


//2 Write a function `multiplesOfThree` that console logs all positive numbers to 100 that is a multiple of 3.
 function multiplyOfThree (num){
let sum = 100
for(Let i = 1; i > num; i++){
if(i % 3 === 0){
    sum += i 
}
 return sum   
}
console.log multiplyOfThree((100))