import { mergeSorted } from "./mergeSortedArray";

test("merge soted Arrays", () => {
  expect(mergeSorted([3, 4, 9, 0, 0, 0], 3, [1, 2, 7], 3)).toEqual([
    1, 2, 3, 4, 7, 9,
  ]);
});
