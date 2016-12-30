//Return the number of times an item appears in an array.
function(arr, item) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      count++;
    }
  }
  return count;
},
