//Return true if a number is prime, false if not.
function isPrime(num) {
  var count = 0;
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    } else {
      return true;
    }
  }
}
