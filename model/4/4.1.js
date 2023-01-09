
const prompt = require("prompt-sync")();
let numSiblings=(prompt("How many sibling so do you have","  "));
 numSiblings=parseInt(numSiblings)
if(numSiblings===1){
  console.log("1 sibling!  ")
}else if(numSiblings >1 ) {
  console.log("More Than one sibling ! ")
}else{
  console.log("no siblings! ")
}


// if its not a number the code will recognize it as astring value ,so it will not work with the ==
// if we put === we have to convert the string to integer to work