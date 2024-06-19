import { mergeKLists } from "./mergeKSortedLists";
import LinkedList, { listToArray } from "../dataStructures/linkedList";

test("Merge k sorted lists", () => {
  const list1 = new LinkedList();
  list1.createLinkedList([2, 4, 6, 8]);

  const list2 = new LinkedList();
  list2.createLinkedList([1, 3, 5, 7]);

  expect(listToArray(mergeKLists([list1, list2]))).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);
});
