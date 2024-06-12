import LinkedListNode from "./linkedListNode";
import { reverseSubList } from "./reverseLinkedList";

export function reverseInRange(head, left, right) {
  const dummy = new LinkedListNode(0);
  dummy.next = head;
  let ptr = dummy;

  for (let idx = 0; idx < left - 1; idx++) {
    ptr = ptr.next;
  }

  const [currSubListHead, nextSubList] = reverseSubList(
    ptr.next,
    right - left + 1
  );
  const currSubListTail = ptr.next;
  ptr.next = currSubListHead;
  currSubListTail.next = nextSubList;

  return dummy.next;
}
