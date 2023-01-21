function accum(str) {
  str = str.split('')
  let res = [];
  for (let i = 0; i < str.length; i++) {
    res.push(str[i].toUpperCase());
    for (let j = 0; j < i; j++) { // add more characters untill reached the index 
      res.push(str[i].toLowerCase());
    }
    res.push("-");
  }

  return res.join("").slice(0, res.length - 1); //remove last "-"


}

console.log(accum('abcd'));
console.log(accum('Rqaezty'));
console.log(accum('cwAt'));