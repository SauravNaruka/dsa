import { MinHeap } from "../dataStructures/heap";

export function kSmallestNumber(lists, k) {
  const numHeap = new MinHeap((a, b) => a[0] - b[0]);
  let count = 0;
  let num = 0;
  let rowIdx;
  let j;

  for (let i = 0; i < lists.length; i++) {
    // log1 + log2....log(m) = log(m!)
    // O(mlog(m))
    numHeap.add([lists[i][0], i, 0]);
  }

  //O(k)
  while (numHeap.size() && k > count) {
    [num, rowIdx, j] = numHeap.delete(); // log(m)

    if (lists[rowIdx].length > j + 1) {
      numHeap.add([lists[rowIdx][j + 1], rowIdx, j + 1]); // log(m)
    }
    count++;
  }

  return num;
}
