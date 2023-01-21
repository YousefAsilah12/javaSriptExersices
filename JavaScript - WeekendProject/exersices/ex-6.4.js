//what is isogram the word that has no repeated letters? true
function isIsogram(str) {
  var arr = str.toLowerCase().split('');
  let word = ""
  if (str.length === 0) {
    return true

  }

  for (var i = 0; i < arr.length; i++) {

    if (word.includes(arr[i])) {
      return false;
    }
    word += arr[i]
  }
  return true;
  
}
console.log(isIsogram(""));
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
