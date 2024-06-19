import { kSmallestNumber } from "./kSmallestNumberInMSortedLists";

test("find kth smallest number in M sorted lists", () => {
  expect(
    kSmallestNumber(
      [
        [2, 6, 8],
        [3, 6, 10],
        [5, 8, 11],
      ],
      5
    )
  ).toBe(6);
});
