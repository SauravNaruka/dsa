import { MinHeap } from "../dataStructures/heap";

function kthSmallestNumber(matrix, k) {
  const minHeap = new MinHeap((a, b) => a[0] - b[0]);
  let count = 0;
  let num = 0;
  let rowIdx = 0;
  let colIdx = 0;

  for (let i = 0; i < matrix.length; i++) {
    minHeap.add([matrix[i][0], i, 0]);
  }

  while (count != k && minHeap.size() > 0) {
    [num, rowIdx, colIdx] = minHeap.delete();
    count++;

    if (matrix[rowIdx].length > colIdx + 1) {
      minHeap.add([matrix[rowIdx][colIdx + 1], rowIdx, colIdx + 1]);
    }
  }

  return num;
}

export { kthSmallestNumber };
