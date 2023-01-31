class Array {
  constructor(array) {
    this.array = array;
  }

  find2(callback) {
    for (let i = 0; i < this.array.length; i++) {
      if (callback(this.array[i])) {

        return this.array[i];
      }
    }
    return undefined;
  }

  filter2(callback) {
    let arr = [];
    for (let i = 0; i < this.array.length; i++) {
      if (callback(this.array[i])) {
        arr.push(this.array[i]);
      }
    }
    return arr;

  }

  reduce2(callback, init) {
    let acc;
    let i=0;
    if (!init) {
      init = this.array[init];
      i = 1
    }
    acc = init;
    for (; i < this.array.length; i++) {
      {
        acc = callback(acc, this.array[i]);
        
      }
    }
    return acc;
  }

}

// let array = new Array([1, 2, 3, 4, 5, 6, 7, 8]);
// let array2 = new Array([1, 2, 2, 4, 5, 6, 7, 8]);
 let array3 = new Array([1,2,3,4,5,6,7,8]);
// console.log(array.find2(el => el > 2));
// console.log(array2.filter2(el => el > 2));
// console.log(array3.reduce(a,b =>a>b,0));

const sumWithInitial = [1,2,3,4,5,6,7,8].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sumWithInitial);


const sumWithInitial2=array3.reduce2(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sumWithInitial2);