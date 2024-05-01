export function binarySearch(haystack, needle) {
  let low = 0;
  let middle;
  let high = haystack.length;

  while (low < high) {
    middle = calculateMiddlePoint(low, high);
    // console.log(`low=${low}, middle=${middle} & High=${high}`);

    if (haystack[middle] === needle) {
      return true;
    } else if (haystack[middle] > needle) {
      high = middle;
    } else {
      low = middle + 1;
    }
  }

  return false;
}

function calculateMiddlePoint(low, high) {
  return Math.floor(low + (high - low) / 2);
}
