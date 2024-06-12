import { reverse } from "./reverseLinkedList";
import { findMidLinkedList } from "./findMidLinkedList";

export function reorderList(head) {
  let first = head;

  const mid = findMidLinkedList(head);
  let second = reverse(mid.next);
  mid.next = null;

  while (second !== null) {
    let firstNext = first.next;
    let secondNext = second.next;

    first.next = second;
    second.next = firstNext;

    first = firstNext;
    second = secondNext;
  }

  return head;
}
