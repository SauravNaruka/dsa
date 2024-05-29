import { printListWithForwardArrow } from "./printListWithForwardArrow";
import { reverseLinkedList } from "./reverseLinkedList";

export function isPalindrome(head) {
  console.log("Head: " + printListWithForwardArrow(head));

  const midPt = getMidPoint(head);
  const revertData = reverseLinkedList(midPt);

  console.log("MidPoint: " + printListWithForwardArrow(midPt));
  console.log("revertData: " + printListWithForwardArrow(revertData));
  console.log("Head2: " + printListWithForwardArrow(head));

  var check = compareTwoHalves(head, revertData);
  reverseLinkedList(revertData);

  console.log("Head3: " + printListWithForwardArrow(head));
  // Replace this placeholder return statement with your code

  return check;
}

function compareTwoHalves(firstHalf, secondHalf) {
  while (firstHalf !== null && secondHalf !== null) {
    if (firstHalf.data !== secondHalf.data) {
      return false;
    } else {
      firstHalf = firstHalf.next;
      secondHalf = secondHalf.next;
    }
  }
  return true;
}

function getMidPoint(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
