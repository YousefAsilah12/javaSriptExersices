// Write a function called repeat_str which repeats the given string src exactly count times.

function repeat_str(times, src) {
  let sting=""

  for (let i = 0; i <times; i++) {
    sting = sting + src
    

  }
  return sting;
  

}

console.log(repeat_str(5, "Hello"));
console.log(repeat_str(6, "i"));