export function minWindow(s, t) {
  // Sliding Window
  const reqFreq = calculateFrequence(t);
  const reqFreqCount = reqFreq.size;
  const slidWindow = initSlideWindow(reqFreq);
  let slidWindowCount = 0;

  let startIdx = 0;
  let endIdx = 0;

  let subStringIdx = [-1, -1];
  let subStringLength = Infinity;
  let subString = "";

  for (; endIdx < s.length; endIdx++) {
    const element = s[endIdx];
    if (reqFreq.has(element)) {
      addFreq(slidWindow, element);
      slidWindowCount =
        reqFreq.get(element) === slidWindow.get(element)
          ? slidWindowCount + 1
          : slidWindowCount;
    }

    while (slidWindowCount === reqFreqCount && startIdx <= endIdx) {
      if (subStringLength > endIdx - startIdx + 1) {
        subStringLength = endIdx - startIdx + 1;
        subStringIdx = [startIdx, endIdx];
      }

      const startElement = s[startIdx];
      if (reqFreq.has(startElement)) {
        slidWindowCount =
          reqFreq.get(startElement) === slidWindow.get(startElement)
            ? slidWindowCount - 1
            : slidWindowCount;
        addFreq(slidWindow, startElement, -1);
      }
      startIdx++;
    }
  }
  if (subStringLength !== Infinity) {
    subString = s.slice(subStringIdx[0], subStringIdx[1] + 1);
  }
  return subString;
}

function calculateFrequence(str) {
  let freq = new Map();
  for (let idx = 0; idx < str.length; idx++) {
    freq = addFreq(freq, str[idx]);
  }
  return freq;
}

function addFreq(freq, element, count = 1, initialize = 1) {
  if (!freq.has(element)) {
    freq.set(element, initialize);
  } else {
    freq.set(element, freq.get(element) + count);
  }
  return freq;
}

function initSlideWindow(reqMap) {
  const map = new Map();

  for (let [key] of reqMap) {
    map.set(key, 0);
  }

  return map;
}
