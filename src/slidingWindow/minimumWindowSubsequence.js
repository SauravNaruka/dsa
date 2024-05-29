export function minWindow(str1, str2) {
  const sizeS1 = str1.length;
  const sizeS2 = str2.length;

  let idxS1 = 0;
  let idxS2 = 0;

  let finalStartSubStr;
  let finalEndSubStr;
  let finalSubStrLength = Infinity;

  let subStr = "";

  while (idxS1 < sizeS1) {
    if (str1[idxS1] === str2[idxS2]) {
      idxS2++;
      if (idxS2 === sizeS2) {
        const start = findStartIdexOfSubStr(str1, str2, idxS1);
        const end = idxS1;
        const subStrLength = end - start + 1; // + 1
        if (finalSubStrLength > subStrLength) {
          //> We reverse checking
          finalStartSubStr = start;
          finalEndSubStr = end;
          finalSubStrLength = subStrLength; // This line
        }
        idxS1 = start;
        idxS2 = 0;
      }
    }

    idxS1++;
  }

  if (Number.isFinite(finalSubStrLength)) {
    subStr = str1.slice(finalStartSubStr, finalEndSubStr + 1);
  }

  return subStr;
}

function findStartIdexOfSubStr(str1, str2, idx) {
  let start = idx;
  let idxS2 = str2.length - 1;
  while (start >= 0 && idxS2 >= 0) {
    if (str1[start] === str2[idxS2]) {
      idxS2--;
    }
    start--;
  }

  return start + 1; // +1
}
