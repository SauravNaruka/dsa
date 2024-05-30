/**
 * Time complexity is O(n)
 * Space Complexity is O(1)
 */
export function insertIntervals(intervals, newInterval) {
  const result = [];
  let idx = 0;
  let lastInserted;

  // Phase 1 Intervals which start before new intervals
  while (idx < intervals.length && intervals[idx][0] <= newInterval[0]) {
    result.push(intervals[idx]);
    idx++;
  }

  // Phase 2: Insert new intervals
  lastInserted = result.length - 1;
  if (!result.length && result[lastInserted][1] <= newInterval[0]) {
    result.push(newInterval);
  } else {
    result[lastInserted][1] = Math.max(result[lastInserted][1], newInterval[1]);
  }

  //   Phase 3: Intervals which start after the new element
  while (idx < intervals.length) {
    lastInserted = result.length - 1;
    if (result[lastInserted][1] <= intervals[idx][0]) {
      result.push(intervals[idx]);
    } else {
      result[lastInserted][1] = Math.max(
        intervals[idx][1],
        result[result.length - 1][1]
      );
    }
  }

  return result;
}
