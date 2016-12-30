//Removes all occurrences of a value in an array, then return the array.
function removeByValue(arr, value) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      arr.splice(i, 1);
      i--;
    }
  }

  return arr;
}
