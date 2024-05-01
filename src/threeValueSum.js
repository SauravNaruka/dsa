export function findSumOfThree(nums, target) {
    let currentIdx = 0;
    // [low, high)
    let sortedNums = mergeSort(nums, 0, nums.length);

    for (; currentIdx <= sortedNums.length - 3; currentIdx++) {
        let leftIdx = currentIdx + 1;
        let rightIdx = sortedNums.length - 1;
        while (leftIdx < rightIdx) {
            const currentValue =
                sortedNums[currentIdx] +
                sortedNums[leftIdx] +
                sortedNums[rightIdx];
            if (currentValue === target) {
                return true;
            } else if (currentValue < target) {
                rightIdx--;
            } else {
                leftIdx++;
            }
        }
    }
    return false;
}

function mergeSort(nums, low, high) {
    const length = high - low;
    if (length > 2) {
        const mid = Math.floor((high + low) / 2);
        //const mid = Math.floor(low + (high - low) / 2);
        // const mid = Math.floor(low + (high - low)/2);
        const leftArray = mergeSort(nums, low, mid);
        const rightArray = mergeSort(nums, mid + 1, high);
        return merge(leftArray, rightArray);
    }
    return [nums[low]];
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
