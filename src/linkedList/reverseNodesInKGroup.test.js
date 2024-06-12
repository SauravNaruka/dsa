import { reverseKGroups } from "./reverseNodesInKGroup";
import LinkedList, { listToArray } from "./linkedList";

test("k group reversal", () => {
  const list = new LinkedList();
  list.createLinkedList([1, 2, 3, 4, 5]);

  expect(listToArray(reverseKGroups(list.head, 3))).toEqual([3, 2, 1, 4, 5]);
});
