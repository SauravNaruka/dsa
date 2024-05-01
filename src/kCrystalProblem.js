export function getFirstFloorToBreakBall(floors, balls) {
  console.log("Start Algo ");
  // Optimize this function: (n/k) + k -1
  // Two balls calculus => 1/n^(1/2)
  // k balls => 1/n^(1/k)

  // \sqrt(n) * \sqrt(n) = n
  // => \sqrt(n) ** 2 = n
  // \quberoot(n) ** 3 = n
  let floor;
  let radix = 1;

  while (radix ** balls <= floors.length) {
    radix += 1;
  }
  console.log("Radix chosen = " + radix);

  const attempts = new Array(balls).fill(0);

  // TODO: Error Start with zero
  // TODO: Error 2: Above is wrong. It should start with 0
  for (let attemptsIndex = 0; attemptsIndex < balls; attemptsIndex++) {
    for (let j = 0; j < radix - 1; j++) {
      attempts[attemptsIndex] += 1;
      // error: this should be < r-1, then in array we will have value till r-1
      floor = convertRadixNumberToDecimal(attempts, radix);
      if (floor >= floors.length) {
        console.log(`Floor is to high. Floor=${floor}`);
        attempts[attemptsIndex] -= 1;
        break;
      }
      console.log(`attempts=${attempts} & floor=${floor}`);
      if (floors[floor]) {
        attempts[attemptsIndex] -= 1;
        break;
      }
      // else {
      //     // TODO: Error Not increasing attempts index
      //     // TODO: Not the correct place to increase
      //     attempts[attemptsIndex] += 1;
      // }
    }
  }

  floor = convertRadixNumberToDecimal(attempts, radix);
  console.log(`Breaks at ${floor}`);

  return floor || -1;
}

// Wrong algorithm. You simiply added the decimal number instead of multiplying
function convertRadixNumberToDecimal(radixNumber, radix) {
  let decimalNumber = 0;
  for (let i = 0; i < radixNumber.length - 1; i++) {
    decimalNumber = (decimalNumber + radixNumber[i]) * radix;
  }

  decimalNumber += radixNumber[radixNumber.length - 1];
  return decimalNumber;
}
