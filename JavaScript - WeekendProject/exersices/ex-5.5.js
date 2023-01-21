// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
function initials(name) {
  let words = name.split(" ");
  return words[0].charAt(0).toUpperCase() +"."+ words[1].charAt(0).toUpperCase();

}
console.log(initials("yoisef asilah"));