function compare(arr1, arr2) {
  let flag = false;

  if (arr1.length === arr2.length) {

    for (var i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          flag = true;
        }

      }
    }


    if (flag === true) {
      return "match";
    }
    return false
  } else {
    return "notmatch";

  }

}

const food = ["Noodle", "Pasta", "Ice-cream",
  "Meat", "Cucumber", "Olives"
];
const food1 = ["Fries", "Ice-cream", "Pizza",
  "Olives", "Hamburgers"
];


console.log(compare(food, food1));