// Fibinacci
//[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]//.....
// or 

//  0  +  1 =   1
//              1  +   2 =  3
//                           3  +  5  = 8
// every 2 numbers the the third of them will be the sum of 2 before
//  0 ,   1  ,  1   ,  2  ,  3  ,  5  ,  8  ,  13 ,  21 ,   34  ,  55 ,  89, 144, ...


function Fibinacci(n) {
  let first = 0;
  let sec = 1;
  let third = first + sec;
  let array = []
  array.push(first)
  array.push(sec)
  array.push(third)

  for (let i = 0; i < n; i++) {
    // first value passed to next index
    first = sec;
    //second value passed to next index
    sec = third;
    // third will be the summ of next 2 numbers
    third = first + sec;
    array.push(third)
  }

  return array;

}

console.log(Fibinacci(10));


// aother solution using the array 
// let fib=[0,1];
// for(let i=2;i<10;i++){
//   fib[i]=fib[i-1]+fib[i-2];
// }
// return fib;