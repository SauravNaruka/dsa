export function isHappyNumber(number) {
  let slow = number;
  let fast = sumOfSquaredNumbers(number);

  while (slow !== fast && fast !== 1) {
    slow = sumOfSquaredNumbers(slow);
    fast = sumOfSquaredNumbers(sumOfSquaredNumbers(fast));
  }

  return fast === 1;
}

function sumOfSquaredNumbers(number) {
  let totalSum = 0;

  while (number > 0) {
    let digit = number % 10;
    totalSum += digit ** 2;
    number = Math.floor(number / 10);
  }

  return totalSum;
}
