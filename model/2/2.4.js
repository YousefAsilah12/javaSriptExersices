// Let us self-learn something. You come to your new workplace
// and you are an expert in the technologies your company is
// working with. But all of the sudden your boss says. We want to
// implement a feature with dates. This will happen all the time in
// your career. So let's roll up our sleeves and start googling. How
// to .... “date js”.
// And as always the MDN docs are a great source Find how to
// get the following:
// 1. Name of the current day e.g. Sunday
// 2. Current day of the month e.g. 31
// 3. Current month e.g January
// 4. Current Year e.g 2021
// Create a function that will return a string in the following format:
// `Today is Sunday the 31 of January 2021’


function today() {
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var today = new Date;
  let dd=today.getDate();
  let mm=today.getMonth();
  let year= today.getFullYear();
 
  let day=today.getDay();
  mm=month[day];
  day=weekday[day];

  if(dd < 10){
    dd="0"+dd;
  }

  return `Today is ${day} the ${dd} of ${mm} ${year}`;
}


console.log  (today())
