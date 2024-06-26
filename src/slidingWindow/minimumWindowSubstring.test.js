import { minWindow } from "./minimumWindowSubstring";

test("if function return minimum window substring", () => {
  expect(minWindow("ABAACBBA", "ABC")).toBe("ACB");
  expect(minWindow("ACBBACA", "ABA")).toBe("BACA");
});
