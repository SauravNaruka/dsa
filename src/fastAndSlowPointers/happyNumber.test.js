import { isHappyNumber } from "./happyNumber";

test("if given number is happy number", () => {
  expect(isHappyNumber(23)).toBeTruthy();
  expect(isHappyNumber(28)).toBeTruthy();
  expect(isHappyNumber(4)).toBeFalsy();
});
