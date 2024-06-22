import { sortColors } from "./sortColors";

test("sort colors", () => {
  expect(sortColors([1, 0, 2, 1, 2, 2])).toEqual([0, 1, 1, 2, 2, 2]);
  expect(sortColors([2, 1, 1, 0, 0])).toEqual([0, 0, 1, 1, 2]);
});
