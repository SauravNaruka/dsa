import { minSubArrayLen } from "./minimumSizeSubarraySum";

test("Size of the subarray is small", () => {
  expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2);
});
