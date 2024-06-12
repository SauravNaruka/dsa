export function reverse(head) {
  let prev = null;
  let next = null;
  let curr = head;

  while (curr != null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

export function reverseSubList(head, k) {
  let prev = null;
  let next = null;
  let curr = head;

  for (let i = 0; i < k; i++) {
    if (curr === null) break;

    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return [prev, curr];
}
