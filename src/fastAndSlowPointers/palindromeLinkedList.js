/**
 * 2 4 6 4 2
 * 2->4->6->4->null
 * 2->4->null
 *
 * mid 6
 *
 * 1 2 4 4 2 1
 * mid 4(second)
 * @param {*} head
 */
export function palindrome(head) {
  const midPt = getSecondQuantile(head);
  const reverListHead = reverse(midPt);

  let result = compareTwoHalves(head, reverListHead);
  reverse(reverListHead);

  return result;
}

function getSecondQuantile(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  console.log(slow.data);
  return slow;
}
function compareTwoHalves(p1, p2) {
  while (p2 != null) {
    if (p1.data !== p2.data) return false;
    p1 = p1.next;
    p2 = p2.next;
  }
  return true;
}

function reverse(head) {
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
