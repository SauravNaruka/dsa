export function sumOfSquaredDigits(number) {
  let totalSum = 0;
  while (number > 0) {
    let digit = number % 10;
    totalSum += digit ** 2;
    number = Math.floor(number / 10);
  }

  return totalSum;
}

export default sumOfSquaredDigits;
