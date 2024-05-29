import { sortColors } from "./sortColors";

describe("sortColors", () => {
  test("if unsorted array is passed", () => {
    expect(sortColors([2, 1, 1, 0, 0])).toEqual([0, 0, 1, 1, 2]);
  });
});
