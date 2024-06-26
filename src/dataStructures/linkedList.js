import LinkedListNode from "./linkedListNode";

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertNodeAtHead(node) {
    if (this.head != null) {
      node.next = this.head;
      this.head = node;
    } else this.head = node;
  }

  createLinkedList(list) {
    list.reverse().forEach((element) => {
      let newNode = new LinkedListNode(element);
      this.insertNodeAtHead(newNode);
    });
  }

  static display(head) {
    let result = "";
    let ptr = head;

    while (ptr != null) {
      result += ptr.data;
      ptr = ptr.next;
      if (ptr != null) {
        result += ", ";
      }
    }
    result += "";
    return result;
  }

  static toArray(head) {
    let result = [];
    let ptr = head;

    while (ptr != null) {
      result.push(ptr.data);
      ptr = ptr.next;
    }
    return result;
  }

  static reverseLinkedList(head) {
    let prev = null,
      next = null,
      curr = head;

    while (curr != null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }
}

export function listToArray(head) {
  return LinkedList.toArray(head);
}

export default LinkedList;
