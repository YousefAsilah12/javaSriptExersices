const prompt = require("prompt-sync")();
let n=Number(prompt("enter number: ","  "));

let x ="";
for (i = 1; i <= n; i++) {
  if (i % 7 === 0 && i.toString().includes('7') ) {
    x +=", BOOM-BOOM" ;
  }else if(i % 7 === 0){
    x+=", BOOM";
    continue;
  }else if(i===1){
    x+=i;
  }
  else{
    x+=", "+i
  }
}
console.log(x);
