// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types.

function longest(str) {
  return str.split(' ').sort((a,b)=>b.length-a.length)[0].length;

}

console.log(longest("The quick brown fox jumped over the lazy dog"));
