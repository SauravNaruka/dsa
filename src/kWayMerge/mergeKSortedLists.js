import LinkedListNode from "../dataStructures/linkedListNode";

export function mergeKLists(lists) {
  const list = diviedAndMergeList(lists, 0, lists.length);
  return list;
}

function diviedAndMergeList(lists, start, end) {
  if (end - start === 1) return lists[start].head;

  const mid = Math.floor((end + start) / 2);
  const list1 = diviedAndMergeList(lists, start, mid);
  const list2 = diviedAndMergeList(lists, mid, end);
  return mergeLists(list1, list2);
}

function mergeLists(list1, list2) {
  const dummy = new LinkedListNode(0);
  let prev = dummy;
  let ptr1 = list1;
  let ptr2 = list2;

  while (ptr1 != null && ptr2 != null) {
    if (ptr1.data <= ptr2.data) {
      prev.next = ptr1;
      ptr1 = ptr1.next;
    } else {
      prev.next = ptr2;
      ptr2 = ptr2.next;
    }
    prev = prev.next;
  }

  if (ptr1 != null) prev.next = ptr1;
  else prev.next = ptr2;

  return dummy.next;
}
