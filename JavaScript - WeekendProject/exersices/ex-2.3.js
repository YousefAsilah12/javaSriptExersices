function nextPerfectSquare(n) {
  // check input if its perfect square
  if (n % Math.sqrt(n) === 0) {
    let x = Math.sqrt(n);
    let nextNum = x + 1

    // returen the root of input incremented by 1 squared
    return Math.pow(nextNum, 2);


  }
  return -1;
}

console.log(nextPerfectSquare(121));