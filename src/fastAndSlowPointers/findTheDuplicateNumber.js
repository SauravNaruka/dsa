/**
 * [1,3,3,4,2,5]
 *
 * a = length before we enter loop
 * b = distance from loop to intersection point
 * c = total length of the loop
 * 2(a+b) = a+c+b
 * => a + b = c
 * => a = c-b
 */
export function findDuplicate(nums) {
  let slow = 0;
  let fast = 0;
  while (true) {
    slow = nums[slow];
    fast = nums[fast];
    fast = nums[fast];

    if (slow === fast) break;
  }

  slow = nums[0];
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return fast;
}
