import { sumOfSquaredDigits } from "./sumOfSquaredDigits";

describe("Test Sum of Squared Digits", () => {
  test("number square", () => {
    expect(sumOfSquaredDigits(54)).toBe(41);
  });
});
