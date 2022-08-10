// Loop solve
function FizzBuzz(num1, num2) {
  let returnValue = "";
  for (let i = 1; i <= 100; i++) {
    if (i % num1 == 0 && i % num2 == 0) {
      returnValue += "fizzbuzz ";
    } else if (i % num1 == 0) {
      returnValue += "fizz ";
    } else if (i % num2 == 0) {
      returnValue += "buzz ";
    } else {
      returnValue += i + " ";
    }
  }
  return returnValue;
}

console.log(FizzBuzz(3, 5));
