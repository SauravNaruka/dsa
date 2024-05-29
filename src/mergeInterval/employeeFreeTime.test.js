import { employeeFreeTime, Interval } from "./employeeFreeTime";

test("employee Free Time", () => {
  const intervals = [
    [new Interval(1, 3), new Interval(6, 9), new Interval(10, 11)],
    [new Interval(3, 4), new Interval(7, 12)],
    [new Interval(1, 3), new Interval(7, 10)],
    [new Interval(1, 4)],
    [new Interval(7, 10), new Interval(11, 12)],
  ];
  employeeFreeTime(intervals);
});
