import { MinHeap } from "../dataStructures/heap";

export function employeeFreeTime(schedule) {
  const heap = new MinHeap((a, b) => {
    const startA = a[0];
    const startB = b[0];
    return startA < startB;
  });
  const result = [];

  for (let idx = 0; idx < schedule.length; idx++) {
    const interval = schedule[idx][0];
    // heap.offer([interval.start, idx, 0])
    heap.add([interval.start, idx, 0]);
  }

  let [prevEnd] = heap.peek();

  while (heap.size() > 0) {
    // const [_, empIdx, intervalIdx] = heap.poll();
    const [_, empIdx, intervalIdx] = heap.delete();
    const empInterval = schedule[empIdx][intervalIdx];

    if (prevEnd < empInterval.start) {
      const freeInterval = new Interval(prevEnd, empInterval.start);
      result.push(freeInterval);
    }
    prevEnd = Math.max(empInterval.end, prevEnd);

    if (intervalIdx + 1 < schedule[empIdx].length) {
      const nextInterval = schedule[empIdx][intervalIdx + 1];
      heap.offer([nextInterval.start, empIdx, intervalIdx + 1]);
    }
  }

  // Replace this placeholder return statement with your code
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
