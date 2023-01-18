function calcAverage (arr){
  var sum =0; // sum should start with 0 or any number you want it cant be with out value 
  for ( var i = 0 ; i < arr .length; i ++ ){
  sum += arr [ i ];
  }
   return sum/arr.length ; //we dont want the sum we want the average so you have to divide by arr.length

  }
  console.log(calcAverage([ 85 , 90 , 92 ]));
  