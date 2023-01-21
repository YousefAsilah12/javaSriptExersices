//            1           0            1          0
//         0x(2^0)  +    0x(2^0)  +    0x(2^0)  +   0x(2^0) 
//                              =(10) decimal  

function convertBinaryToDicmal(binaryArr) {
  let decimal = 0;

  let multiplier=0;

  //    checking the array reverse 
  for (let i = binaryArr.length - 1; i >= 0; i--) {
  // multiply every digit by multiplier which start with 0 and every other digit will increase by 1
    decimal += parseInt(binaryArr[i]) * Math.pow(2, multiplier);
    multiplier++;
  }
  return decimal;
}

console.log(convertBinaryToDicmal([1,1,1,1,1,1]));