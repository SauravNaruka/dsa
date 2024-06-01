import { MinHeap } from "../dataStructures/minHeap";

export function meetingRooms(intervals) {
  const minHeap = new MinHeap();
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  minHeap.add(sortedIntervals[0][1]);

  for (let idx = 1; idx < sortedIntervals.length; idx++) {
    if (sortedIntervals[idx][0] >= minHeap.peek()) {
      minHeap.delete();
    }
    minHeap.add(sortedIntervals[idx][1]);
  }

  return minHeap.size();
}

export default meetingRooms;
