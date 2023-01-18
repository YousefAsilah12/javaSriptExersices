// BLock 1 
//iife function its invoked automaticly at start the input (0) is for a  and the (1)for b so the out put will be a = 0 

//BLock 2 
// inside this function we declare a new virable inside if statement its private virable only worked inside the if statment 
// 0 
// 1

// block 5 
// 10
// 20 //private virable
// 10


// block 6 
// 10 //global
// 20 //inner //also not affect to out side 
// 30 //private not affect to out side 
// 20 //inner
// 10 //global


// block 7

var x;
x = 10;

function test() {
  var x; //x is declared here with no value
  if (x > 20) {
    x = 50;
  }
  console.log(x); //no value undefined

}
test();

console.log("--");

// block 8
function test() {
  var x, y;
  if (false) {
    x = 50; // deafult is true will not change value of x 
  }
  console.log(x); //undefined

  console.log(y); //not declared yet undefined

  y = 100;
  console.log(y); //100
}
test();


console.log("--");

function test() {
  foo();
  bar(); //declared befor expression function its need to after  error

  function foo() {
    console.log('foo');
  }
  var bar = function () {
    console.log('bar');
  }
}
test();