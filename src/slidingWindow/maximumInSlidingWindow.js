import { Deque } from "../dataStructures/deque";

export function findMaxSlidingWindow(nums, w) {
  if (nums.length === 1) {
    return nums;
  }

  const result = new Array();
  const deque = new Deque();
  for (let idx = 0; idx < w; idx++) {
    cleanUp(nums[idx], nums, deque);
    deque.push(idx);
  }
  result[0] = nums[deque.peekFront()];

  for (let idx = w; idx < nums.length; idx++) {
    cleanUp(nums[idx], nums, deque);
    if (!deque.isEmpty() && deque.peekFront() <= idx - w) {
      deque.shift();
    }
    deque.push(idx);
    // result[idx - w + 1] = nums[deque.peekFront()];
    result.push(nums[deque.peekFront()]);
  }

  return result;
}

function cleanUp(value, nums, deque) {
  while (!deque.isEmpty() && value >= nums[deque.peekBack()]) {
    deque.pop();
  }
}
