import { MedianOfStream } from "./findMedianFromADataStream";

test("find Median From A DataStream", () => {
  const median = new MedianOfStream();
  median.insertNum(22);
  median.insertNum(35);
  median.insertNum(30);
  median.insertNum(25);

  expect(median.findMedian()).toBe(27.5);
});
