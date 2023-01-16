
const candyStore = {
  candies: [{
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4
    },
  ],
  cashRegister: 200
}

function getCandy(candyStore, id) {
  //your code
  return candyStore.candies.find(val=>val.id === id)

}
function getPrice(candyStore, id){
  //your code
  let x ;
  x=candyStore.candies.find(val=>val.id === id)
  return x.price
}

function addCandy(candyStore, id, name, price){
  //your code
  candyStore.candies.push({
    id: id,
    name: name,
    price: price,
    amount: 1
  })
}
  
function buy(candyStore, id){
  //your code
 let x= candyStore.candies.find(val=>val.id === id);
 x.amount--;
 candyStore.cashRegister+=x.price;
  
  console.log(x);
  console.log(candyStore.cashRegister);

  }

console.log(getCandy(candyStore,"as12f"));
console.log(getPrice(candyStore,"as12f"));
addCandy(candyStore,"as12f","mars",22);

buy(candyStore,"as12f")