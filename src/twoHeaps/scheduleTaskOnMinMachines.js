import { MinHeap } from "../dataStructures/heap";

/**
 * Option 1:
 *  - sort based on start time - O(nlogn)
 *  - insert all of them in min heap based on start time
 *
 * Option 2:
 *  - two heap approach
 *  - Insert in min heap based on start time
 *  - popout one element and insert into second min heap
 *  - Second min heap based on end time
 *
 * [[1,7], [5,6], [6,7]]
 * 1st Min Heap :[ ]
 * 2nd Min Hepa : [[5,7], [1,7]]
 */
export function scheduleTaskOnMinMachines(tasks) {
  const startTimeHeap = new MinHeap((a, b) => a[0] - b[0]);
  const endTimeHeap = new MinHeap();

  for (let i = 0; i < tasks.length; i++) {
    startTimeHeap.add(tasks[i]);
  }

  while (startTimeHeap.size()) {
    const task = startTimeHeap.delete();

    if (endTimeHeap.size() && task[0] >= endTimeHeap.peek()) {
      endTimeHeap.delete();
    }

    endTimeHeap.add(task[1]);
  }
  return endTimeHeap.size();
}
