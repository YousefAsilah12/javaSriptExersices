// century by year 
//  17 century  1601-1700  
//  18 century  1701-1800
//  19 century  1801-1900
//  20 century  1901-2000
//  21 century  2001-2100


function getCentury(year) {

  if (year.toString().length === 4 && Number.isInteger(year)) {
    year = year.toString();// number to string
    if (year.charAt(2) === '0' && year.charAt(3) === '0') {
      return year.charAt(0) + year.charAt(1);
    } else if (year.charAt(2) > '0' || year.charAt(3) > '0') {//if last two digits bigger than 0  
      return parseInt(year.charAt(0) + year.charAt(1)) + 1; //take the next century

    }

  } else {
    return -1;
  }

}

console.log("century: " + getCentury(1705));
console.log("century: " + getCentury(1900));
console.log("century: " + getCentury(1601));
console.log("century: " + getCentury(2000));