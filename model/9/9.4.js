 function shape(n){
  let res=""
  for (let i = 0; i <= n; i++) {

    for (let j = 0; j < i; j++) {
      res+="#";
    }
    res+="\n"

}
return res  

}

console.log(shape(5)); 