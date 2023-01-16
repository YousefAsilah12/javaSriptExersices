function doubleValues(array) {
  return array.map(res => res * 2);
}

function onlyEvenValues(array) {
  return array.filter(res => res % 2 === 0);
}


function showFirstAndLast(array) {
  let result = []
  result = [array[0], array[array.length - 1]].filter(res => typeof res === 'string');
  return result;
}

function vowelCount(string) {
  let vowels = 'aeiouAEIOU';
  let res = {};
  string.split('').forEach(function (char) {
    if (vowels.indexOf(char) !== -1) {
      if (res[char]) {
        count[char]++;
      } else {
        res[char] = 1;
      }
    }
  });
  return res;

}

function capitalize(string) {
  return string.toUpperCase();
}

function shiftLetters(str) {
  // worked only with uppercase
  return str.split("").map(c => String.fromCharCode((c.charCodeAt() + 1 - 65) % 26 + 65)).join("")
}

function swapCase(str) {
  return str.split(" ").map((word, i) => i % 2 === 0 ? word.toUpperCase() : word.toLowerCase()).join(" ");
}
const myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const strings = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
console.log(doubleValues(myarr));
console.log(onlyEvenValues(myarr));
console.log(showFirstAndLast(strings));
console.log(vowelCount('hello'));
console.log(shiftLetters('HELLO'));
console.log(swapCase('hello how are you mr joe'));