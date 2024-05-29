import { isPalindrome } from "./validPalindromSkipOne";

describe("function that takes a string as input and checks whether it can be a valid palindrome by removing at most one character from it", () => {
  test("function that takes a string as input and checks whether it can be a valid palindrome by removing at most one character from it", () => {
    expect(isPalindrome("abca")).toBe(true);
  });
});
