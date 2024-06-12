import LinkedListNode from "./linkedListNode";
import { reverseSubList } from "./reverseLinkedList";

export function reverseKGroups(head, k) {
  const dummy = new LinkedListNode(0);
  dummy.next = head;
  let ptr = dummy;

  while (ptr !== null) {
    let tracker = ptr;

    for (let i = 0; i < k; i++) {
      if (tracker === null) break;
      tracker = tracker.next;
    }

    if (tracker === null) break;

    const [currSubListHead, nextSubList] = reverseSubList(ptr.next, k);
    const prevTail = ptr.next;
    ptr.next = currSubListHead;
    prevTail.next = nextSubList;
    ptr = prevTail;
  }

  return dummy.next;
}
