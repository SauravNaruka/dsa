import { longestRepeatingCharacterReplacement } from "./longestRepeatingCharacterReplacement";

test("function to find the longest repeating character", () => {
  expect(longestRepeatingCharacterReplacement("aabccbb", 2)).toBe(5);
  expect(longestRepeatingCharacterReplacement("fzgzfz", 6)).toBe(6);
});
