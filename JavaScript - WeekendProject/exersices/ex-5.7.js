// Ex5.7 - shortest words
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function shortestWords(str) {
  return str.split(' ').sort((a,b)=>a.length-b.length)[0].length;

}

console.log(shortestWords("The quick brown fox jumped over the lazy dog"));
