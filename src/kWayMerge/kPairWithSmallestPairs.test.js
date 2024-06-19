import { kSmallestPairs } from "./kPairWithSmallestPairs";

test("K smallest pairs", () => {
  expect(kSmallestPairs([2, 8, 9], [1, 3, 6], 3)).toEqual([
    [2, 1],
    [2, 3],
    [2, 6],
  ]);
});
