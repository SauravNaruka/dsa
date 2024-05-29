import { mergeIntervals } from "./mergeIntervals";

test("Merge intervals merge overlapping intervals", () => {
  expect(
    mergeIntervals([
      [1, 5],
      [3, 7],
      [4, 6],
      [6, 8],
    ])
  ).toEqual([[1, 8]]);

  expect(
    mergeIntervals([
      [10, 12],
      [12, 15],
    ])
  ).toEqual([[10, 15]]);

  expect(
    mergeIntervals([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
      [18, 20],
    ])
  ).toEqual([
    [1, 6],
    [8, 10],
    [15, 20],
  ]);
});
