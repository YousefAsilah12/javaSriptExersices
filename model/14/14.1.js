//find max num using reduce
const a1 = [1, 2, 3, 4, 5, 6]
const max = a1.reduce((a, b) => Math.max(a, b))

console.log("the max is " + max);


//find the sum of even numbers with reduce
// sum of even numbers 
const evenSum = a1.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    return acc + curr;
  }
  return acc;
},0);

console.log("sum of even" + evenSum);