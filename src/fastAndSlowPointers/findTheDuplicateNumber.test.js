import { findDuplicate } from "./findTheDuplicateNumber";

test("if fuplicate number exist in array", () => {
  expect(findDuplicate([1, 3, 3, 4, 2, 5])).toBe(3);
  expect(findDuplicate([1, 5, 3, 4, 2, 5])).toBe(5);
});
