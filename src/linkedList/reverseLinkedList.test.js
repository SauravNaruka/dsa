import { reverse } from "./reverseLinkedList";
import LinkedList, { listToArray } from "./linkedList";

test("Reverse of linked list", () => {
  const list = new LinkedList();
  list.createLinkedList([1, 2, 3, 4, 5]);

  expect(listToArray(reverse(list.head))).toEqual([5, 4, 3, 2, 1]);
});
