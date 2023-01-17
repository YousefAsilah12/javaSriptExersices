const people = [{
    personName: "John Smith",
    age: 24
  },
  {
    personName: "Jane Doe",
    age: 44
  },
  {
    personName: "Robert Johnson",
    age: 44
  },

  {
    personName: "Michael Brown",
    age: 32
  }
];


// 1. Write a function called extractOnlyValue which accepts an
// array of objects and a key and returns a new array with
// the value of each object at the key
const extractOnlyValue = (arr, key) => arr.reduce((acc, obj) => {
  acc.push(obj[key]);
  return acc;
}, []);

console.log(extractOnlyValue(people, "personName"));
console.log(extractOnlyValue(people, "age"));


function countOnlyVowels(str) {
  const vowelRe = /[aeiou]/;
  const countVowels = str.split('').reduce((acc, c) => {

    // Test if the current letter is a vowel
    const found = vowelRe.test(c);

    // If it is: if the vowel exists in the object as a key increase the count +1
    // and if it doesn't set it to zero, and then increase the count
    if (found) {
      if (acc[c]) {
        acc[c] += 1;
      } else {
        acc[c] = 1;
      }
    }

    // return the accumulator
    return acc;
  }, {});


  return countVowels;
}
console.log(countOnlyVowels("The quick brown fox jumps over the lazy dog"));



function addKeyAndValue(array,key,value){
  //using reduce method
  const newarr = array.reduce((acc, c,i) => { 
    acc[i][key]=value;
    return acc;
   },array);
  return newarr
} 
console.log(addKeyAndValue(people, "p", "age"));
