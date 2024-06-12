import LinkedList from "./linkedList";

export function swapPairs(head) {
  const dummy = new LinkedList(0);
  dummy.next = head;
  let ptr = dummy;

  while (ptr.next !== null) {
    let track = ptr;
    let numOfNodes = 0;
    while (track.next !== null && numOfNodes < 2) {
      track = track.next;
      numOfNodes++;
    }

    if (numOfNodes < 2) break;

    let subListTail = ptr.next;
    subListTail.next = track.next;
    ptr.next = track;
    ptr = track;
    ptr.next = subListTail;
    ptr = subListTail;
  }

  return dummy.next;
}
