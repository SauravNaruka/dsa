import { findLongestSubstring } from "./longestSubstringWithoutRepeatingCharacters";

test("if we can find longest substring", () => {
  expect(findLongestSubstring("pwwkew")).toBe(3);
  expect(findLongestSubstring("abcdbea")).toBe(5);
  expect(findLongestSubstring("aba")).toBe(2);
  expect(findLongestSubstring("abccabcabcc")).toBe(3);
  expect(findLongestSubstring("aaaabaaa")).toBe(2);
  expect(findLongestSubstring("bbbbb")).toBe(1);
});
