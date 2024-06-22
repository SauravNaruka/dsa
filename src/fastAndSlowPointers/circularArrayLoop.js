export function circularArrayLoop(nums) {
  for (let i = 0; i < nums.length; i++) {
    const direction = nums[i] >= 0;
    let slow = i;
    let fast = i;

    while (true) {
      slow = getNextStep(nums, slow);
      fast = getNextStep(nums, fast);

      if (
        isSingleNodeCycle(nums, fast) ||
        !isDirectionSame(nums, fast, direction)
      )
        break;

      fast = getNextStep(nums, fast);
      if (
        isSingleNodeCycle(nums, fast) ||
        !isDirectionSame(nums, fast, direction)
      )
        break;

      if (slow === fast) return true;
    }
  }
  return false;
}

function isSingleNodeCycle(nums, ptr) {
  return Math.abs(nums[ptr] % nums.length) === 0;
}

function isDirectionSame(nums, ptr, prevDirection) {
  const currDirection = nums[ptr] >= 0;
  return currDirection === prevDirection;
}

function getNextStep(nums, value) {
  let result = (nums[value] + value) % nums.length;

  if (result < 0) {
    result += nums.length;
  }

  return result;
}
