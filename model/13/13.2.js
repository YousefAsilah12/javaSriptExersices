const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

//asc
foods.sort();

// desc
foods.sort((a, b) => b.length - a.length);
console.log(foods);

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "Hummus",
  "pizza with extra pineapple",
];

//sort array with the srtrings includes uppercase

foodsWithUpperCase.sort(
  function (a, b) {
    if (/[A-Z]/.test(a)) return -1;
  }
)

console.log("with upper case are asc :");
console.log(foodsWithUpperCase);

//now try the same desc
foodsWithUpperCase.sort(
  function (a, b) {
    if (/[A-Z]/.test(b)) return -1;
  }
)

console.log("with upper case are desc :");
console.log(foodsWithUpperCase);


//now sort by longest word first
const words = ["apple",
  "supercalifragilisticexpialidocious",
  "hi", "zoo"
];
words.sort((a, b) => b.length - a.length);
console.log(words);