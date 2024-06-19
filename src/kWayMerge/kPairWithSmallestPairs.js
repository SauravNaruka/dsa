import { MinHeap } from "../dataStructures/heap";

export function kSmallestPairs(list1, list2, k) {
  let pairs = [];
  const pairheap = new MinHeap((a, b) => a[0] - b[0]);
  const initialHeapSize = Math.min(k, list1.length);

  for (let i = 0; i < initialHeapSize; i++) {
    pairheap.add([list1[i] + list2[0], i, 0]);
  }

  while (pairheap.size() && k > pairs.length) {
    const [, p1, p2] = pairheap.delete();
    pairs.push([list1[p1], list2[p2]]);

    if (list2.length > p2 + 1) {
      pairheap.add([list1[p1] + list2[p2 + 1], p1, p2 + 1]);
    }
  }

  return pairs;
}
