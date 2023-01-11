// Who can add key and value pairs faster in a for loop?
//object

// 2. Who can find faster a specific property from itself?
//object

// 3. Who is faster in adding a single entry?
//map

// Who is faster in deleting a single entry?
//obj


let obj = {};
const maxCount = 1000000;
console.time("addwithobj") // <---- Starts the timer
for (let i = 0; i < maxCount; i++) {
  //Perform the operation to be measured multiple times
  obj[i] = i;


}
console.timeEnd("addwithobj") // <---- Stops the time


let mapobj = new Map();
console.time("adding with map") // <---- Starts the timer
for (let i = 0; i < maxCount; i++) {
  //Perform the operation to be measured multiple times
  mapobj.set(i, i)


}
console.timeEnd("adding with map") // <---- Stops the time


console.time("get an value by map") // <---- Stops the time
mapobj.get(5);
console.timeEnd("get an value by map") // <---- Stops the time

console.time("get an value by obj") // <---- Stops the time
obj[5];
console.timeEnd("get an value by obj") // <---- Stops the time


console.time("delete from obj") // <---- Stops the time
let five=5
delete obj.five;
console.timeEnd("delete from obj") // <---- Stops the time

console.time("delete from map") // <---- Stops the time
mapobj.delete(5)
console.timeEnd("delete from map") // <---- Stops the time

console.time("obj single entry") // <---- Stops the time
mapobj[5]=5;
console.timeEnd("obj single entry") // <---- Stops the time

console.time("map single entry") // <---- Stops the time
mapobj.set(5,5)
console.timeEnd("map single entry") // <---- Stops the time


