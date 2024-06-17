import { Heap } from "../dataStructures/heap";

export function maximumCapital(c, k, capitals, profits) {
  const minCapitalsHeap = new Heap((a, b) => a[0] - b[0]);
  const maxProfitsHeap = new Heap();
  let invested = 0;
  let totalCapital = c;

  for (let capIdx = 0; capIdx < capitals.length; capIdx++) {
    minCapitalsHeap.add([capitals[capIdx], capIdx]);
  }

  while (k > invested) {
    while (
      minCapitalsHeap.size() &&
      minCapitalsHeap.peek()[0] <= totalCapital
    ) {
      const idx = minCapitalsHeap.delete()[1];
      maxProfitsHeap.add(profits[idx] * -1);
    }

    if (maxProfitsHeap.size() === 0) break;

    const profit = maxProfitsHeap.delete() * -1;
    totalCapital += profit;
    invested++;
  }

  return totalCapital;
}
