import LinkedListNode from "./linkedListNode";

// Template for the linked list
class LinkedList {
  constructor() {
    this.head = null;

    // insertNodeAtHead method will insert a LinkedListNode at head
    // of a linked list.
    this.insertNodeAtHead = function (node) {
      if (this.head != null) {
        node.next = this.head;
        this.head = node;
      } else this.head = node;
    };

    // createLinkedList method will create the linked list using the
    // given integer array with the help of InsertAthead method.
    this.createLinkedList = function (list) {
      list.reverse().forEach((element) => {
        let newNode = new LinkedListNode(element);
        this.insertNodeAtHead(newNode);
      });
    };

    // This method will display the elements of the linked list.
    this.display = function () {
      let result = "",
        temp = this.head;
      while (temp != null) {
        result += temp.data;
        temp = temp.next;
        if (temp != null) {
          result += ", ";
        }
      }
      result += "";
      return result;
    };

    this.toArray = function () {
      let result = [];
      let temp = this.head;

      while (temp != null) {
        result.push(temp.data);
        temp = temp.next;
      }
      return result;
    };
  }
}

export function listToArray(head) {
  let result = [];
  let ptr = head;

  while (ptr != null) {
    result.push(ptr.data);
    ptr = ptr.next;
  }
  return result;
}

export function printListWithForwardArrow(linkedListNode) {
  let temp = linkedListNode;
  let result = "";
  while (temp != null) {
    result += temp.data;
    temp = temp.next;
    if (temp != null) result += " → ";
    else result += " → null";
  }
  return result;
}

export default LinkedList;
