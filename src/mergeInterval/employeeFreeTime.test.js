import { employeeFreeTime, Interval } from "./employeeFreeTime";

test("employee Free Time", () => {
  const schedule = [
    [new Interval(1, 3), new Interval(6, 7)],
    [new Interval(2, 4)],
    [new Interval(2, 5), new Interval(9, 12)],
  ];

  const result = employeeFreeTime(schedule);
  console.log(result);
  expect(result).toEqual([
    [5, 6],
    [7, 9],
  ]);
});
