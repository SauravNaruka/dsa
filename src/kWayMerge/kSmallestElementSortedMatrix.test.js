import { kthSmallestNumber } from "./kSmallestElementSortedMatrix";

test("kth Smallest Number", () => {
  expect(
    kthSmallestNumber(
      [
        [2, 6, 8],
        [3, 6, 10],
        [5, 8, 11],
      ],
      5
    )
  ).toBe(6);
});
