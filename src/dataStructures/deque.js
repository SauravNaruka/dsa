import Node from "./doublyLinkedListNode";

/**
 * Double-ended queue
 */
export class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  shift() {
    if (this.length === 0) {
      return null;
    }

    const removed = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removed.next;
      this.head.prev = null;
    }
    this.length--;
    return removed.value;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }

    const removed = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removed.prev;
      this.tail.next = null;
    }

    this.length--;
    return removed.value;
  }

  peekFront() {
    return this.head ? this.head.value : null;
  }

  peekBack() {
    return this.tail ? this.tail.value : null;
  }

  isEmpty() {
    return this.length === 0;
  }

  toString() {
    if (this.head === null) return "[]";

    let result = "[";
    let current = this.head;
    while (current.next !== null) {
      result += current.value + ",";
      current = current.next;
    }
    result += current.value + "]";
    return result;
  }
}
