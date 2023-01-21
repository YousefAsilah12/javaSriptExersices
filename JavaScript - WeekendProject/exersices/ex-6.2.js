//count numbers of duplicate 


function countRepeatedChars(str) {
    let count = 0;
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (charCount[char]) {
            charCount[char] += 1;//if it is a duplicate, increase the count
        } else {
            charCount[char] = 1;// if its not a duplicate, start with 1 
        }

    }
    for (let char in charCount) {
        if (charCount[char] > 1) { //check if char is repeated more than once
            count++;
        }
    }
    return count;
}

console.log(countRepeatedChars("abcde")); // Output: 0
console.log(countRepeatedChars("aabbcde")); // Output: 2
console.log(countRepeatedChars("aabBcde")); // Output: 2
console.log(countRepeatedChars("indivisibility")); // Output: 1
console.log(countRepeatedChars("Indivisibilities")); // Output: 2
console.log(countRepeatedChars("aA11")); // Output: 2
console.log(countRepeatedChars("ABBA")); // Output: 2