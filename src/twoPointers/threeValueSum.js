/**
 * In the solution above, sorting the array takes O(nlog(n))
 * and the nested loop takes O(n^2) to find the triplet.
 * Therefore, the total time complexity of this solution is O(nlog(n)+n^2),
 * which simplifies to O(n^2)
 * @param {*} nums
 * @param {*} target
 * @returns
 */
export function findSumOfThree(nums, target) {
  let sortedNums = mergeSort(nums, 0, nums.length);

  for (let currentIdx = 0; currentIdx < sortedNums.length - 2; currentIdx++) {
    let leftIdx = currentIdx + 1;
    let rightIdx = sortedNums.length - 1;

    while (leftIdx < rightIdx) {
      const currentValue =
        sortedNums[currentIdx] + sortedNums[leftIdx] + sortedNums[rightIdx];

      if (currentValue === target) return true;
      else if (currentValue > target) rightIdx--;
      else leftIdx++;
    }
  }
  return false;
}

export function findSumOfThreeV2(nums, target) {
  const sortedNums = nums.sort((a, b) => a - b);

  for (let currIdx = 0; currIdx < sortedNums.length - 2; currIdx++) {
    let low = currIdx + 1;
    let high = sortedNums.length - 1;

    while (low < high) {
      const sumOfThreeNums =
        sortedNums[currIdx] + sortedNums[low] + sortedNums[high];

      if (sumOfThreeNums === target) return true;
      else if (sumOfThreeNums < target) low++;
      else high--;
    }
  }

  return false;
}

function mergeSort(nums, low, high) {
  // [low, high)
  const length = high - low;
  if (length > 1) {
    const mid = Math.floor((high + low) / 2);

    //const mid = Math.floor(low + (high - low) / 2);
    // const mid = Math.floor(low + (high - low)/2);
    const leftArray = mergeSort(nums, low, mid);
    const rightArray = mergeSort(nums, mid, high);
    return merge(leftArray, rightArray);
  } else {
    return [nums[low]];
  }
}

function merge(leftArray, rightArray) {
  const sortedArray = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < leftArray.length && rightIdx < rightArray.length) {
    if (leftArray[leftIdx] <= rightArray[rightIdx]) {
      sortedArray.push(leftArray[leftIdx]);
      leftIdx++;
    } else {
      sortedArray.push(rightArray[rightIdx]);
      rightIdx++;
    }
  }

  while (leftIdx < leftArray.length) {
    sortedArray.push(leftArray[leftIdx]);
    leftIdx++;
  }
  while (rightIdx < rightArray.length) {
    sortedArray.push(rightArray[rightIdx]);
    rightIdx++;
  }
  return sortedArray;
}
