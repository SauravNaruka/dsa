/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function mergeIntervals(intervals) {
  const result = [intervals[0]];

  for (let idx = 1; idx < intervals.length; idx++) {
    const lastInserted = result[result.length - 1];
    const currentInterval = intervals[idx];

    if (lastInserted[1] >= currentInterval[0]) {
      lastInserted[1] = Math.max(lastInserted[1], currentInterval[1]);
    } else {
      result.push(currentInterval);
    }
  }

  return result;
}

export default mergeIntervals;
