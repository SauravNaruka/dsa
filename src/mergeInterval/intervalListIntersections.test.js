import { intervalListIntersections } from "./intervalListIntersections";

test("interval list intersections find all the intersections", () => {
  let i1 = [
    [1, 4],
    [5, 6],
    [7, 9],
  ];
  let i2 = [
    [3, 5],
    [6, 7],
    [8, 9],
  ];
  expect(intervalListIntersections(i1, i2)).toEqual([
    [3, 4],
    [5, 5],
    [6, 6],
    [7, 7],
    [8, 9],
  ]);
});
