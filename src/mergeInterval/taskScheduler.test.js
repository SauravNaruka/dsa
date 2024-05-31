import { taskScheduler, taskSchedulerTime } from "./taskScheduler";

test("Task scheduler which return task performed", () => {
  expect(taskScheduler(["A", "A", "B", "B"], 2)).toEqual([
    "A",
    "B",
    null,
    "A",
    "B",
  ]);
  expect(taskScheduler(["A", "A", "A", "B", "B", "B"], 2)).toEqual([
    "A",
    "B",
    null,
    "A",
    "B",
    null,
    "A",
    "B",
  ]);
});

test("it calculate total time tasks will take", () => {
  expect(taskSchedulerTime(["A", "A", "A", "B", "B", "C"], 2)).toBe(7);
});
