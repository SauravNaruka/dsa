import { minWindow } from "./minimumWindowSubsequence";

test("Min window", () => {
  expect(minWindow("abcdebdde", "bde")).toBe("bcde");
});
