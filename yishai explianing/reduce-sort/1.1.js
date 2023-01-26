//array methods
//map&filter

// filter 
const a4=[100,2,3,45,4545,45];
const a5=a4.filter(x=>x%2===0);


//sort created side aeffects 
//reduce takeas array and return a value 
// reduce is a design pattern 
// function that remember the pervious value  and current value 




const a1=[1,2,3,4,5,6,7,8,9];
const a2=["a","b","c","d","e","f","g","h","i","j"];

// sum of array =>
const sum=a1.reduce((pervValue,currentValue)=>pervValue+currentValue,0);
console.log(sum);

// average of array =>
const average=a1.reduce((a,b)=>a+b)/a1.length;


//gather chars to word 
const word=a2.reduce((pervValue,currentValue)=>pervValue+currentValue)
console.log(word);




//sort 
// this way its not good way it will convert thevalues to string and takes only the first digit 
const a7=a2.sort()



// form small to big 
const a3=[100,2,3,45,4545,45];
const a6=a3.sort((a,b)=>a-b);
console.log(a6);

//sort objects
const a8=[{name:1},{alice:2},{bob:3}];

a9=a8.sort((a,b)=>{
  //check if object has a key?
  const aKeys=Object.keys(a);
  if(aKeys[0]==="alice"){
    return -1;
  }
  if(aKeys[0]==="alice"){
    return -1;
  }
  
});

//same object but the name will be first the secound will be bob
a10=a8.sort((a,b)=>{
  //check if object has a key?
  const aKeys=Object.keys(a);
  if(aKeys[0]==="bob"){
    return -1;
  }
});


console.log(a10);

