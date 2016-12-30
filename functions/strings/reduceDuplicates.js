//Reduce duplicate characters of a string to a desired amount.
function reduceDuplicates(str, amount) {
  var newArray = [];
  var arr = str.split('');

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== newArray[newArray.length - 1]) {
      newArray.push(arr[i]);
    } else if (arr[i] !== newArray[newArray.length - amount]) {
      newArray.push(arr[i]);
    }
  }

  return newArray.join('');
}
