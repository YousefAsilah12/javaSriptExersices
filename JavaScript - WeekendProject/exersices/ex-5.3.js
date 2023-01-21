// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str) {

  if (typeof str === 'string') {
    str = str.toLowerCase();
    let array = str.split(/[ -_]+/); // spilt array in two conditions (-)(_)
    for (let i = 0; i < array.length; i++) { //                                                                                                             1  +   2
      array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1); //putting first letter in upper case and put the rest of word wirh out first letter  Y  +   ousef
    }

    array = array.join('')
    return array
  }
  return "invalid"

}




console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase(11));