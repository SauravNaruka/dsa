import { reverseInRange } from "./reverseNodesInRange";
import LinkedList, { listToArray } from "./linkedList";

test("reverse of the nodes in the given range of left and right", () => {
  const list = new LinkedList();
  list.createLinkedList([1, 2, 3, 4, 5, 6]);

  expect(listToArray(reverseInRange(list.head, 2, 5))).toEqual([
    1, 5, 4, 3, 2, 6,
  ]);

  const list2 = new LinkedList();
  list2.createLinkedList([1, 2, 3, 4, 5]);

  expect(listToArray(reverseInRange(list2.head, 1, 5))).toEqual([
    5, 4, 3, 2, 1,
  ]);
});
