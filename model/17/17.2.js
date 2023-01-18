// BLock 1 
//iife function its invoked automaticly at start the input (0) is for a  and the (1)for b so the out put will be a = 0 

//BLock 2 
// inside this function we declare a new virable inside if statement its private virable only worked inside the if statment 
// 0 
// 1

// Block3

var module = (function () {
  var foo = 'foo'
  function addToFoo (bam) {
  foo = bam;
  return foo;
  }
  var publicInterface = {
  bar: function () {
  return 'bar';
  },
  bam: function () {
  return addToFoo('bam')
  }
  }
  return publicInterface
  })()
  console.log(module.bar())
  console.log(module.bam())