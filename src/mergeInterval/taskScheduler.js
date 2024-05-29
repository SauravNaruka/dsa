export function taskScheduler(tasks, n) {
  const result = [];
  const freqMap = new Map();

  for (let idx = 0; idx < tasks.length; idx++) {
    const freq = (freqMap.get(tasks[idx]) || 0) + 1;
    freqMap.set(tasks[idx], freq);
  }
  const orderedTasks = Array.from(freqMap).sort((a, b) => a[1] - b[1]);

  let idx = 0;
  let taskFinished = 0;
  while (taskFinished < tasks.length) {
    if (idx === orderedTasks.length || orderedTasks[idx][1] === 0) {
      idx = 0;
    } else {
      const [task, freq, lastExecuted = -1] = orderedTasks[idx];
      if (lastExecuted === -1 || result.length - lastExecuted > n) {
        orderedTasks[idx][1] = freq - 1;
        orderedTasks[idx][2] = result.length;
        result.push(task);
        taskFinished++;
        idx++;
      } else {
        result.push(null);
      }
    }
  }

  return result;
}

export default taskScheduler;
