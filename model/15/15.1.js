function getSum(arr1, arr2){
let sum = 0;//const not changable
for (let i=0; i < arr1.length; i++){
sum += arr1[i];
}
for (let i=0; i < arr2.length; i++){
sum += arr2[i];
}
}
getSum([1,2,3],[5,66,23]);

// two problems while calling the same getSum([1,2,3][5,66,23]); needs to be , between two arrays 
// secound sum cant be const because its changable virable

// node debug

// the code is working now fixed
