function LetterCounter(array) {
  let lcounts = {};

  for (let i = 0; i < array.length; i++) {
      let word = array[i].toLowerCase();
      for (let j = 0; j < word.length; j++) {
          let letter = word[j];
          if (lcounts[letter]) {
              lcounts[letter]++;
          } else {
              lcounts[letter] = 1;
          }
      }
  }
  return lcounts;
}

const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
console.log(LetterCounter(array));
