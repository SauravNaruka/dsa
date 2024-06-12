import { swapNodes } from "./swappingNodesLinkedList";
import LinkedList, { listToArray } from "./linkedList";

test("swap nodes in the linked list", () => {
  const list = new LinkedList();
  list.createLinkedList([1, 2, 3, 4, 5]);

  expect(listToArray(swapNodes(list.head, 2))).toEqual([1, 4, 3, 2, 5]);
});
