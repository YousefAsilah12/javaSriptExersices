// function welcome() {
//   let welcome = 'Welcome to Appleseeds Bootcamp!';
//   return welcome;
//   }

// implicit =>
const welcome= ()=>"welcome to Appleseeds Bootcamp!"

// explicit
const welcome2= ()=>{
 return "welcome to Appleseeds Bootcamp!"
}



// function power(a) {
//   let myNumber = a;
//   let result = Math.pow(myNumber, 2);
//   return result;
//   }

// implicit =>
const power= (a)=>Math.pow(a,2);

// explicit
const power2= ()=>{
 return Math.pow(a,2);
}



// IIFE
//immeditly invoke 
//Invoked function expression
// used to not affect the global virables 
//init only once 

counter=10;// this virable will not be affected by the iife virable 
counter++;


(function(){  // function with out a name <-- anonymous function-->
  var counter=10;
  counter++;
})();//Invoking immeditly


// From function expressions to IIFE functions.
// const squareRoot = a => Math.sqrt(a);


(function squareRoot (a){
    console.log(Math.sqrt(a))  ;
})(5);
// const randomNumbers = (a, b) => Math.random() * (a - b) +
// b;
(function randomNumbers (a,b){
  
  console.log( Math.random() * (a - b) + b);
})(10,9);


// const randomNumbers = (a, b) => Math.random() * (a - b) +
// b;
