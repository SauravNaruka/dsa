export function reverseEvenLengthGroups(head) {
  let ptr = head;
  let maxGroupLength = 2;

  while (ptr.next !== null) {
    let tracker = ptr;
    let numNodes = 0;

    while (numNodes < maxGroupLength) {
      if (tracker.next === null) break;
      numNodes++;
      tracker = tracker.next;
    }

    if (numNodes % 2) {
      ptr = tracker;
    } else {
      const [subListHead, nextSubList] = reverseSubList(ptr.next, numNodes);
      let subListTail = ptr.next;
      subListTail.next = nextSubList;
      ptr.next = subListHead;
      ptr = subListTail;
    }

    maxGroupLength++;
  }

  return head;
}

function reverseSubList(head, k) {
  let prev = null;
  let next = null;
  let curr = head;

  for (let i = 0; i < k && curr !== null; i++) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return [prev, curr];
}
