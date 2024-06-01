import { meetingRooms } from "./meetingRooms";

test("if it calculate corect number of meeting rooms", () => {
  expect(
    meetingRooms([
      [2, 8],
      [3, 4],
      [3, 9],
      [5, 11],
      [8, 20],
      [11, 15],
    ])
  ).toBe(3);
});
