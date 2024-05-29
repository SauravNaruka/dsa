import { isPalindrome } from "./palindromeLinkedList";
import { LinkedList } from "./linkedListFromArray";

describe("test palindrom for linked list", () => {
  test("palindrom in linked list", () => {
    const linkedList = new LinkedList();
    linkedList.createLinkedList([1, 2, 3, 2, 1]);
    expect(isPalindrome(linkedList.head)).toBe(true);
  });
});
