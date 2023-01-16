function loop(array) {
  let res = [];

  array.forEach(array => {
    res.push({
      id: array.id,
      name: array.name
    })
  });
  return res;
}

// map creates an array with the results of calling a callback on every element of the array

function loop2(array) {
  let res = [];
  res = array.map(function (array) {
    return {
      id: array.id,
      name: array.name
    };
  });
}