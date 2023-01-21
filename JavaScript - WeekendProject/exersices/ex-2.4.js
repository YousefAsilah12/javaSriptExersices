function getUnique(arr) {
  // sorted array all the same values will be next to each other 
  arr.sort((a,b)=>a-b);

//          if arr0 = arr1   return last element else return first
  return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
}

console.log(getUnique([ 1, 1, 1, 2, 1]));