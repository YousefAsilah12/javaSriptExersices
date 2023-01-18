function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}

// the problem is the name of the function while we invoked it wrong name 
// now there is no problems but the function not finding the smallest its worked wrong but there is no errors 


// here is the currect answer
function findSmallest(a, b, c){
  if (a > b && b > c){
      return c;
  } else if (a > c && c > b) {
      return b;
  } else {
      return a;
  }
}
console.log(findSmallest(52, 66, 2));
