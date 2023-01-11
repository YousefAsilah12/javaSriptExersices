function removeDuplicates(array) {
    var noduplicate = [];
    for (var i = 0; i < array.length; i++) {
        if (noduplicate.indexOf(array[i]) === -1) {
            noduplicate.push(array[i]);
        }
    }
    return noduplicate;
}

console.log(removeDuplicates([1,1,1,4,4,4,5,5,5,7,7])); 