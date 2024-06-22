import {
  isPalindrome,
  isPalindromeBySkippingOneCharacter,
} from "./ValidPalindrome";

test("if given string is a plaindrome", () => {
  expect(isPalindrome("ABCBA")).toBeTruthy();
  expect(isPalindrome("RACECAR")).toBeTruthy();
  expect(isPalindrome("AA")).toBeTruthy();
  expect(isPalindrome("A")).toBeTruthy();
  expect(isPalindrome("ABCCA")).toBeFalsy();
  expect(isPalindrome("AB")).toBeFalsy();
});

test("if given string is a plaindrome by skipping att most one character", () => {
  expect(isPalindromeBySkippingOneCharacter("ABCEBA")).toBeTruthy();
  expect(isPalindromeBySkippingOneCharacter("DEEAD")).toBeTruthy();
  expect(isPalindromeBySkippingOneCharacter("RACEACAT")).toBeFalsy();
});
