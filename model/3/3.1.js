// function welcome() {
// let welcome = 'Welcome to Appleseeds Bootcamp!';
// return welcome;
// }

const welcome = () => "welcome to Appleseeds Bootcamp!";
console.log(welcome())

// function power(a) {
//   let myNumber = a;
//   let result = Math.pow(myNumber, 2);
//   return result;
//   }

const power = a => Math.pow(a, 2);
console.log(power(4));


// function add(a, b = 5) {
//   let myNumber = a;
//   let sum = myNumber + b;
//   return sum;
//   }

const add = (a, b = 5) => a + b;
console.log(add(5));




// consthello = () => "Hello!";

function hello() {
  return "Hello";
}


// const squareRoot = a => Math.sqrt(a);
function squareRoot(a) {
  let res = Math.sqrt(a);
  return res;

}


// const randomNumbers = (a, b) => Math.random() * (a - b) +
// b;

function name(a, b) {
  let res;
  res = Math.random() * (a - b) + b;
  return res;

}