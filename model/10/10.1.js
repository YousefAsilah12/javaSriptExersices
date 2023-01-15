function isString(string, callback) {
  if (typeof string === 'string') {
    callback(string);
  } else {
    console.log('not the type of string');
  }
}

function firstWordUpperCase(str, callback) {

  const befor = str.split(' ')[0];
  const first = str.split(' ')[0].toUpperCase();
  str = str.replace(befor, first);
  callback(str);
}


isString("yousef", callback)
firstWordUpperCase("yousef asilah ", callback)

function callback(string) {
  console.log("'" + string + "'");
}