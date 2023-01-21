function Tribonacci(n) {
  let first=0;
  let secound=0;
  let third=1;
  let fourth=first+secound+third;
  let array=[];
  array.push(first);
  array.push(secound);
  array.push(third);
  array.push(fourth);

  for (let i = 0; i <n; i++) {
    first=secound;
    secound=third;
    third=fourth;
    fourth=first+secound+third;
    array.push(fourth)

  }
  
return array;

}

console.log(Tribonacci(5));



// function tribonacci2(n) {
//   let trib = [0, 0, 1];
//   for (let i = 3; i <= n+3; i++) {
//     trib.push( trib[i-1] + trib[i-2] + trib[i-3]);
//   }
//   return trib ;
// }