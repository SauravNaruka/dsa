export function findLongestSubstring(str) {
  const charMap = new Map();

  let start = 0;
  let end = 0;
  let length = 0;

  while (end < str.length) {
    if (charMap.has(str[end])) {
      start = Math.max(charMap.get(str[end]) + 1, start);
    }
    charMap.set(str[end], end);

    if (length < end - start + 1) {
      length = end - start + 1;
    }
    end++;
  }

  return length;
}
