import { MinHeap, MaxHeap } from "./heap";
test("Min Heap", () => {
  const minHeap = new MinHeap();
  minHeap.add(4);
  minHeap.add(7);
  minHeap.add(2);
  minHeap.add(1);
  minHeap.add(9);
  expect(minHeap.peek()).toBe(1);

  minHeap.delete();
  minHeap.delete();
  expect(minHeap.peek()).toBe(4);
});

test("Max Heap", () => {
  const maxHeap = new MaxHeap();
  maxHeap.add(4);
  maxHeap.add(7);
  maxHeap.add(2);
  maxHeap.add(1);
  maxHeap.add(9);
  expect(maxHeap.peek()).toBe(9);

  maxHeap.delete();
  maxHeap.delete();
  expect(maxHeap.peek()).toBe(4);
});
