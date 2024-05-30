import { MinHeap } from "../dataStructures/minHeap";

export function employeeFreeTime(schedule) {
  const minHeap = new MinHeap((a, b) => a[0] - b[0]);
  const result = [];
  let prevEnd;

  // Add first interval for all employees
  for (let empIdx = 0; empIdx < schedule.length; empIdx++) {
    minHeap.add([schedule[empIdx][0].start, empIdx, 0]);
  }

  prevEnd = minHeap.peek()[0];

  while (!minHeap.isEmpty()) {
    const [start, empIdx, intervalIdx] = minHeap.delete();
    const currentEnd = schedule[empIdx][intervalIdx].end;

    if (prevEnd < start) result.push([prevEnd, start]);

    prevEnd = Math.max(prevEnd, currentEnd);

    if (intervalIdx + 1 < schedule[empIdx].length) {
      minHeap.add([
        schedule[empIdx][intervalIdx + 1].start,
        empIdx,
        intervalIdx + 1,
      ]);
    }
  }

  return result;
}

export class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.closed = true; // the interval is closed by default

    this.setClosed = function (closed) {
      this.closed = closed;
    };

    this.formatInterval = function () {
      return this.closed
        ? "[" + this.start + ", " + this.end + "]"
        : "(" + this.start + ", " + this.end + ")";
    };
  }
}

export function display(vec) {
  let string = "[";
  if (vec.length > 0) {
    for (let i = 0; i < vec.length; i++) {
      string += vec[i].formatInterval();
      if (i + 1 < vec.length) {
        string += ", ";
      }
    }
  }
  string += "]";
  return string;
}
