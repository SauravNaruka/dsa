import { scheduleTaskOnMinMachines } from "./scheduleTaskOnMinMachines";

test("Schedule task on min machines", () => {
  expect(
    scheduleTaskOnMinMachines([
      [1, 7],
      [8, 13],
      [5, 6],
      [10, 14],
      [6, 7],
    ])
  ).toBe(2);
});
