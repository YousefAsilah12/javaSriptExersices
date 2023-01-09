// Create a function that takes 1 argument, a number score.
// Returns either “A”, ”B”, “C”, “D”, “F”.
// score of:
// 0-64 is a “F”
// 65-69 is a “D”
// 70-79 is a “C”
// 80-89 is a “B”
// 90-100 is an “A

const prompt = require("prompt-sync")();
let numScore=Number(prompt("number score 0 - 100: ","  "));

let scoreIs;
if(numScore >= 0 && numScore<=64){
    scoreIs='F'
}else if(numScore >= 65 && numScore<=69){
  scoreIs='D'
}else if(numScore >= 70 && numScore<=79){
  scoreIs='C'
}else if(numScore >= 80 && numScore<=89){
  scoreIs='B'
}else if(numScore >= 90 && numScore<=100){
  scoreIs='A'
}
else{
  console.log("enter valid number 0 - 100")
}

console.log(scoreIs)