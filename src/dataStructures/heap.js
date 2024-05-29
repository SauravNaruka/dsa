export class MinHeap {
  isLessThan = (a, b) => a < b;
  data;

  constructor(isLessThan) {
    if (isLessThan) {
      this.isLessThan = isLessThan;
    }
    this.data = [];
  }

  add(value) {
    this.data.push(value);
    this.heapifyUp(this.data.length - 1);
  }

  delete() {
    if (this.data.length === 0) return null;
    else {
      this.swap(0, this.data.length - 1);
      const element = this.data.pop();
      this.heapifyDown(0);
      return element;
    }
  }

  peek() {
    if (this.data.length === 0) return null;
    else return this.data[0];
  }

  isEmpty() {
    return this.data.length === 0;
  }

  size() {
    return this.data.length;
  }

  heapifyUp(idx) {
    let currIdx = idx;
    let parentIdx = this.parentIndex(idx);

    while (
      parentIdx >= 0 &&
      this.isLessThan(this.data[currIdx], this.data[parentIdx])
    ) {
      this.swap(parentIdx, currIdx);
      currIdx = parentIdx;
      parentIdx = this.parentIndex(currIdx);
    }
  }

  heapifyDown(idx) {
    let currIdx = idx;
    let leftChildIndex = this.leftChildIndex(currIdx);
    let rightChidlIndex = this.rightChidlIndex(currIdx);

    while (leftChildIndex < this.data.length) {
      let swapIdex = leftChildIndex;

      if (
        rightChidlIndex < this.data.length &&
        this.isLessThan(this.data[rightChidlIndex], this.data[leftChildIndex])
      ) {
        swapIdex = rightChidlIndex;
      }

      if (this.isLessThan(this.data[swapIdex], this.data[currIdx])) {
        this.swap(currIdx, swapIdex);
        currIdx = swapIdex;
        leftChildIndex = this.leftChildIndex(currIdx);
        rightChidlIndex = this.rightChidlIndex(currIdx);
      } else {
        break;
      }
    }
  }

  swap(idxA, idxB) {
    [this.data[idxA], this.data[idxB]] = [this.data[idxB], this.data[idxA]];
  }

  parentIndex(idx) {
    return Math.floor((idx - 1) / 2);
  }

  leftChildIndex(idx) {
    return idx * 2 + 1;
  }

  rightChidlIndex(idx) {
    return idx * 2 + 2;
  }
}

export default MinHeap;
