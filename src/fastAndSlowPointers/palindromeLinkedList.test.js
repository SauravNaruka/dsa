import { palindrome } from "./palindromeLinkedList";
import LinkedList from "../dataStructures/linkedList";

test("if given list is palindrome", () => {
  const list = new LinkedList();
  list.createLinkedList([2, 4, 6, 4, 2]);
  expect(palindrome(list.head)).toBeTruthy();

  const list2 = new LinkedList();
  list2.createLinkedList([0, 3, 5, 5, 0]);
  expect(palindrome(list2.head)).toBeFalsy();

  const list3 = new LinkedList();
  list3.createLinkedList([1, 2, 3, 3, 2, 1]);
  expect(palindrome(list3.head)).toBeTruthy();

  const list4 = new LinkedList();
  list4.createLinkedList([1, 2, 3, 7, 3, 2, 1]);
  expect(palindrome(list4.head)).toBeTruthy();
});
