import { reverseEvenLengthGroups } from "./reverseNodesInEvenLengthGroups";
import LinkedList, { listToArray } from "./linkedList";

test("Reverse the even length groups", () => {
  const list = new LinkedList();
  list.createLinkedList([1, 2, 3, 4, 5]);

  expect(listToArray(reverseEvenLengthGroups(list.head))).toEqual([
    1, 3, 2, 5, 4,
  ]);
});
