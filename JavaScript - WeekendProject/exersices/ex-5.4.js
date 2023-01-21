// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same
// string with all even indexed characters in each word upper cased, and all odd indexed
// characters in each word lower cased. The indexing just explained is zero based, so the zero-ith
// index is even, therefore that character should be upper cased.
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
// be present if there are multiple words. Words will be separated by a single space(' ').
// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

// function toWeirdCase(string) {  //  i 
//   //            ["sss","sssss"]   ["ssss"]
//   return string.split("").map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join("");
// }
// console.log(toWeirdCase("hello world")); // HeLlO WoRlD

function toWeirdCase(string) {
  string= string.toLowerCase();
  let words = string.split(" ");
  let weirdCaseWords = [];
  for (let i = 0; i < words.length; i++) {
      let currentWord = words[i];
      let weirdWord = "";
      for (let j = 0; j < currentWord.length; j++) {
          if (j % 2 === 0) {
              weirdWord += currentWord[j].toUpperCase();
          } else{
            weirdWord += currentWord[j];
          }
      }
      weirdCaseWords.push(weirdWord);
  }
  return weirdCaseWords.join(" ");
}

console.log(toWeirdCase("this is a test string")); // Output: "ThIs Is A TeSt StRiNg"
