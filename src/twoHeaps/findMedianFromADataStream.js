import { MinHeap, MaxHeap } from "../dataStructures/heap";

export class MedianOfStream {
  constructor() {
    this.smallNums = new MaxHeap();
    this.largeNums = new MinHeap();
    this.size = 0;
  }

  insertNum(num) {
    if (this.smallNums.size() === 0 || this.smallNums.peek() > num) {
      this.smallNums.add(num);
    } else {
      this.largeNums.add(num);
    }
    this.balanceHeaps();
    this.size++;
  }

  findMedian() {
    if ((this.size & 1) === 0) {
      return (this.smallNums.peek() + this.largeNums.peek()) * 0.5;
    } else {
      return this.smallNums.peek();
    }
  }

  balanceHeaps() {
    if (this.smallNums.size() > this.largeNums.size() + 1) {
      const num = this.smallNums.delete();
      this.largeNums.add(num);
    } else if (this.largeNums.size() > this.smallNums.size()) {
      const num = this.largeNums.delete();
      this.smallNums.add(num);
    }
  }
}
