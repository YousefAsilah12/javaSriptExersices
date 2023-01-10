const people = ["Greg", "Mary", "Devon", "James"];
//1 
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

//2 array shift removes first element from the array 
people.shift()


//3 pop removes last value from the array 
people.pop()

//4 method adds one or more elements to the beginning of an array 
people.unshift("Matt")

//5 push added value to end of array 
people.push("yousef")


//6
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if(people[i] === "Mary"){
      break;
  }
}

//7
const newArray=people.slice(1,-1);

//8
people.indexOf("Mary");

//9
people.indexOf("Foo");

//10
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie")

//concat() method is used to merge two or more arrays. 
const withBob = people.concat("Bob");
