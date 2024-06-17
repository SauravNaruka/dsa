import { maximumCapital } from "./maximizeCapital";

test("maximumCapital return correct result", () => {
  expect(maximumCapital(1, 2, [1, 2, 2, 3], [2, 4, 6, 8])).toBe(11);
  expect(maximumCapital(2, 3, [1, 2, 3, 4], [1, 3, 5, 7])).toBe(17);
  expect(maximumCapital(2, 3, [1, 3, 4, 5, 6], [1, 2, 3, 4, 5])).toBe(9);
  expect(maximumCapital(2, 3, [6, 3, 4, 5, 1], [5, 2, 3, 4, 1])).toBe(9);
});
