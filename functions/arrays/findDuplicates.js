//Find all items in an array that have duplicates, then return them in a new array.
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
