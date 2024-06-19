import { MinHeap } from "../dataStructures/heap";

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
