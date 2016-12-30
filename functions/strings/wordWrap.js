//Set a string to word-wrap for an amount of character columns
function wordWrap(str, cols) {
  var array = str.split(' ');
  var count = 0;

  for (var i = 0; i < array.length; i++) {
    count += array[i].length;
    if (count >= cols) {
      array[i] = array[i] + '\n';
      count = 0;
    } else if (i == array.length - 1) {
      array[i] = array[i];
      count = 0;
    } else if (array[i].length + array[i+1].length >= cols) {
      array[i] = array[i] + '\n';
      count = 0;
    } else {
      array[i] = array[i] + ' ';
      count++;
    }
  }

  return array.join('');
}
