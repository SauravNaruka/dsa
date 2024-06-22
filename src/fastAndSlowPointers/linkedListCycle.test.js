import { detectCycle } from "./linkedListCycle";
import LinkedList from "../dataStructures/linkedList";

test("if linked list has cycle", () => {
  const linkedList = new LinkedList();
  linkedList.createLinkedList([2, 4, 6, 8, 10]);
  let head = linkedList.head;
  while (head.next != null) head = head.next;
  head.next = linkedList.head;
  expect(detectCycle(linkedList.head)).toBeTruthy();

  const linkedList2 = new LinkedList();
  linkedList2.createLinkedList([1, 3, 5, 7, 9]);
  expect(detectCycle(linkedList2.head)).toBeFalsy();
});
