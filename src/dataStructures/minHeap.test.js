import { MinHeap } from "./heap";
test("heap", () => {
  const heap = new MinHeap();
  heap.add(4);
  heap.add(7);
  heap.add(2);
  heap.add(1);
  heap.add(9);
  console.log("Heap is");
  console.dir(heap.data);

  heap.delete();
  heap.delete();
  console.log("Heap after delete is");
  console.dir(heap.data);
});
