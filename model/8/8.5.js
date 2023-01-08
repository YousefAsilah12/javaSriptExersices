// 1. Create a function that receives 1 argument, an object, and
// returns a new object with the properties and values
// swapped.


function swap(param) {
    var newobj = {};
    for(var key in param){
      newobj[param[key]] = key;
    }
    return newobj;
  }



let obj={name:"yousef",lastname:"asilah"};
console.log(swap(obj))