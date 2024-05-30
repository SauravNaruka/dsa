export function intervalListIntersections(intervalListA, intervalListB) {
  let idxA = 0;
  let idxB = 0;
  let result = [];

  while (idxA < intervalListA.length && idxB < intervalListB.length) {
    let start = Math.max(intervalListA[idxA][0], intervalListB[idxB][0]);
    let end = Math.min(intervalListA[idxA][1], intervalListB[idxB][1]);

    if (start <= end) result.push([start, end]);

    if (intervalListA[idxA][1] < intervalListB[idxB][1]) idxA++;
    else idxB++;
  }

  return result;
}
