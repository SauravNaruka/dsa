import { findSumOfThree } from "./threeValueSum";

describe("K Crystal Problem", () => {
  test("if result is correct", () => {
    expect(findSumOfThree([3, 7, 1, 2, 8, 4, 5], 10)).toBe(true);
  });
});
