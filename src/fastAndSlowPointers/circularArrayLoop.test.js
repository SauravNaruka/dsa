import { circularArrayLoop } from "./circularArrayLoop";

test("if function detects circular array loop", () => {
  expect(circularArrayLoop([3, 1, 2])).toBeTruthy();
  expect(circularArrayLoop([2, 1, -1, -2])).toBeFalsy();
  expect(circularArrayLoop([3, -3, 1, 1])).toBeTruthy();
});
