//design pattern : to solve specific problem 



//object oriented programming  : OOP
//like the c# ,JAVA 
// and javascript supported it 

// the idea its to make the code  write easy to write and ease to read and to understand
//the oop used objects :to help us connect together properies and methods 
// when we use objects for writing code inside a template , the objects are usually called "class";
// we use objects to organaize the entire code . 

// Encapsulation:
// putting in capsul 
// it help us to gather multiple methods and elements in the same places.
//togather all values in one place

class Person {
  constructor() {
    {
      this.name = "yousef";
      this.age = 23;
    }
  }
}
const person = new Person();


//Abstraction:
// to hide what we dont want to be acces to out side 
//its a private methods or objects .
// controll the ways to controll way 

const per = {
  name: "yousef",
  age: 23,
  changeAge: (newAge) => {
    if (typeof newAge !== "number") {
      return;
    }
    this.age
  }
}

class Person2 {
  constructor() {
    {
      this.name = "yousef";
      this.age = 23;
    }
  }
}

per.age = changeAge(33);


// inheritance
// typing a code in shorted way by sharing properties.
// objects with same values .
// class anumal{
// legs:4
//  }
//  class cat extends animals 
//  sound :'myao'
// cat.legs =1
// you can access the father propety with it 

// problem with it : we need different value for each class 
// in this example we need each one to have different sound or value 
// cat extend animal 
//  makeSoundL Print("Mayo")
// dog extend animal 
//  makeSoundL Print("----")





// FUNCTIONAL PROGRAMING ....


// THE DOWN SIDE OF IT :
//OOP VERY BIG CODE 
// YOU WIll type very big code to do very small stuff
// side effects for oop  :
  // changing the state of my code 
  // the result not always the same if we changing the state of the object



  // filter make a copy not changing the value , there is no side effects 
  const filterr = [1,2,3].filter((el)=>{return el<3});
  console.log('filters',filterr);


  //for each changing the value , creting side effects changing the array value 
  const a1=[1,2,3]
  a1.forEach((element,index)=>{
    a1[index]=element*2;
  });

