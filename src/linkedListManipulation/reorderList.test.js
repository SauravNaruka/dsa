import { reorderList } from "./reorderList";
import LinkedList, { listToArray } from "./linkedList";

test("reorder of the list as if they are folded", () => {
  const list = new LinkedList();
  list.createLinkedList([1, 2, 3, 4, 5]);

  expect(listToArray(reorderList(list.head))).toEqual([1, 5, 2, 4, 3]);
});
