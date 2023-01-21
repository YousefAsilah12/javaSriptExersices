function sumOfLowestNumbers(array) {
  let intArr = [];
  
  //getting the right values befor getting the minimum
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number' && array[i] >= 0 && Number.isInteger(array[i])) {
        intArr.push(array[i]);
    }
  }

  //sort the array and getting first 2 numbers
 const sortedarray= intArr.sort((a, b) => a - b);
  console.log(`the tow lowest numbers ${sortedarray[0]} and ${sortedarray[1]}`);

  return sortedarray[0] + sortedarray[1];
}

console.log(sumOfLowestNumbers([19, 5, 42, 2, 77]));