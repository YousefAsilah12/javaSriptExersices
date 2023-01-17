const numbers = [1, -5, 666, 2, 400, 11];
const numbers2 = [1, -5, 666, 2, 400, 11];



const asc=numbers.sort((a, b) => a - b);
const desc=numbers2.sort((a, b) => b-a);

// its also will change the array not only copying the value 
console.log(numbers);
console.log(numbers2);
