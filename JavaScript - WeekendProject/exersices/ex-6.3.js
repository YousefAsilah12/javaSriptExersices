


//a = xyaabbccccdefww
//b= xxxxyyyyabklmmopq
//  longeresultt(a,b)=abcdefklmopqwxy


function longest(a, b) {
  let result = "";
  for (let i = 0; i < a.length; i++) {
      if (!result.includes(a[i])) {// if result not includes a[i]
          result += a[i]; //then add it to result virable
      }
  }
  for (let i = 0; i < b.length; i++) {
      if (!result.includes(b[i])) {
          result += b[i];
      }
  }
  result = result.split("").sort().join("");
  return result;
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmoq"));
