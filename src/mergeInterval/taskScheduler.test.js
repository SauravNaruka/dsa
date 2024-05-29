import { taskScheduler } from "./taskScheduler";

test("Task scheduler which return task performed", () => {
  expect(taskScheduler(["A", "A", "B", "B"], 2).length).toBe(7);
  expect(taskScheduler(["A", "A", "A", "B", "B", "B"], 2).length).toBe(8);
});
