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


//Removes all occurrences of a item in an array, then return the original array.
function removeByValue(arr, item) {
for (i = 0; i < arr.length; i++) {
  if (arr[i] == item) {
    arr.splice(i, 1);
    i--;
    }
  }
  return arr;
}

//Find all items that have duplicates and return them in a new array.
function findDuplicates(arr) {
  var duplicates = [];
  for (var i = 0; i < arr.length; i++) {
    if  (i != arr.lastIndexOf(arr[i])) {
      if (!array.includes(arr[i])){
        array.push(arr[i]);
        }
      }
    }
  return duplicates;
}
