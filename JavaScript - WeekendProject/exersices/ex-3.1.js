// population is p0=1000 start of the year
// every year increase 2 percent
// 50 per year 


function getYear(population, percentage, popPerYear, equalsTo) {

  let testYear = population; //used to save the sum of population to compare with year that givin
  percentage = percentage / 100;

  let flag=false;
  //i  start with 1 
  for (let i = 1; flag===false; i++) {
    testYear= testYear + testYear * percentage + popPerYear;
    if (testYear >= equalsTo) {
      flag=true;
      return `it will need ${i} entire years`;
    }
  }
}

console.log(getYear(1500, 5, 100, 5000));
console.log(getYear(1500000, 2.5, 10000, 2000000));