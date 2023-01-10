function myfunc(array) {
  const newarr = [];
  for (let i = 0; i < array.length; i++) {
    newarr.push(array[i].length);
  }
  return newarr;
}

const people = ["Greg", "Mary", "Devon", "James"];
const arrayoflengths = myfunc(people);
console.log(arrayoflengths); 
