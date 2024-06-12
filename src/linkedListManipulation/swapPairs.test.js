import { swapPairs } from "./swapPairs";
import LinkedList, { listToArray } from "./linkedList";

test("Swap pair in linked list", () => {
  const list = new LinkedList();
  list.createLinkedList([1, 2, 3, 4, 5]);

  expect(listToArray(swapPairs(list.head))).toEqual([2, 1, 4, 3, 5]);
});
