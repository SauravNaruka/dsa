export function minSubArrayLen(nums, target) {
  let start = 0;
  let end = 0;
  let currSum = 0;
  let subArrayLength = Infinity;

  while (end < nums.length) {
    currSum += nums[end];

    while (currSum >= target && start <= end) {
      if (subArrayLength > end - start + 1) subArrayLength = end - start + 1;

      currSum -= nums[start];
      start++;
    }
    end++;
  }

  return Number.isFinite(subArrayLength) ? subArrayLength : 0;
}
