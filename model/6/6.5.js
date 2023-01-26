const array = new Array(100).fill({ name: 'yousef', age: 23 });

const arrnumber = Array.from({length: 100}, (_, index) => index + 1);

const object={a:1,b:2,c:3}
const newarr=Object.values(object);//it will save the values of object as an array 


let objConvert={}
let arrayConvert=[1,2,2,3]

Object.assign(objConvert, arrayConvert); 

console.log(objConvert)

console.log("if array :  "+Array.isArray(arrayConvert)); 

