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

export function taskSchedulerTime(tasks, n) {
  const freqMap = new Map();

  for (let idx = 0; idx < tasks.length; idx++) {
    const task = tasks[idx];
    freqMap.set(task, (freqMap.get(task) || 0) + 1);
  }
  const sortedTask = Array.from(freqMap).sort((a, b) => a[1] - b[1]);
  const mostFreq = sortedTask[sortedTask.length - 1][1];
  sortedTask.pop();

  let idleTime = (mostFreq - 1) * n;

  while (sortedTask.length > 0 && idleTime > 0) {
    idleTime -= Math.min(mostFreq - 1, sortedTask[sortedTask.length - 1][1]);
    sortedTask.pop();
  }

  idleTime = Math.max(0, idleTime);

  return tasks.length + idleTime;
}

export default taskScheduler;
