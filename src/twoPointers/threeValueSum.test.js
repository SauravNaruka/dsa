import { findSumOfThree, findSumOfThreeV2 } from "./threeValueSum";

describe("K Crystal Problem", () => {
  test("sum of three number using merge sort", () => {
    expect(findSumOfThree([3, 7, 1, 2, 8, 4, 5], 10)).toBe(true);
  });

  test("sum of three number using JS sort method", () => {
    expect(findSumOfThreeV2([3, 7, 1, 2, 8, 4, 5], 10)).toBe(true);
  });
});
