//Find all occurrences of a value in an array and return them in a new array.
function findAllOccurences(arr, target) {
  var newArray =[];
  for (var i = 0; i < arr.length; i++) {
    if (target == arr[i]) {
    var target_index = arr.indexOf(target, i);
    newArray.push(target_index);
    }
  }
  return newArray;
}
