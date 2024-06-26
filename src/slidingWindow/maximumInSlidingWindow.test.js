import { findMaxSlidingWindow } from "./maximumInSlidingWindow";

test("find maximum in Sliding Window", () => {
  expect(findMaxSlidingWindow([-4, 2, -5, 3, 6], 3)).toEqual([2, 3, 6]);
});
