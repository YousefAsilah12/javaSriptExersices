function myfunc(array) {
  const newarr = [];
  let i =0;
  while (i < array.length) {
    newarr.push(array[i].length);
    i++;
  }


  return newarr;
}

const people = ["Greg", "Mary", "Devon", "James"];
const arrayoflengths = myfunc(people);
console.log(arrayoflengths);

// i thin in this soulution i prefare using for loop  .