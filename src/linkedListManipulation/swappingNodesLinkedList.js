export function swapNodes(head, k) {
  let curr = head;
  let first = null;
  let second = head;

  for (let count = 0; count < k - 1; count++) {
    curr = curr.next;
  }
  first = curr;

  while (curr.next !== null) {
    curr = curr.next;
    second = second.next;
  }

  swap(first, second);
  return head;
}

function swap(n1, n2) {
  let temp = n2.data;
  n2.data = n1.data;
  n1.data = temp;
}
