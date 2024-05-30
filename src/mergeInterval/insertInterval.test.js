import { insertIntervals } from "./insertInterval";

test("insert intervals is able to insert new interval", () => {
  expect(
    insertIntervals(
      [
        [1, 3],
        [6, 9],
      ],
      [2, 5]
    )
  ).toEqual([
    [1, 5],
    [6, 9],
  ]);

  expect(
    insertIntervals(
      [
        [1, 3],
        [5, 7],
        [8, 9],
        [10, 13],
      ],
      [2, 6]
    )
  ).toEqual([
    [1, 7],
    [8, 9],
    [10, 13],
  ]);

  expect(
    insertIntervals(
      [
        [1, 3],
        [5, 7],
        [8, 9],
        [10, 13],
      ],
      [14, 15]
    )
  ).toEqual([
    [1, 3],
    [5, 7],
    [8, 9],
    [10, 13],
    [14, 15],
  ]);
});
