export function longestRepeatingCharacterReplacement(s, k) {
  const charFreq = new Map();

  let startIdx = 0;
  let endIdx = 0;

  let mostFreqChar = 0;
  let longestLength = 0;

  while (endIdx < s.length) {
    if (!charFreq.has(s[endIdx])) {
      charFreq.set(s[endIdx], 1);
    } else {
      charFreq.set(s[endIdx], charFreq.get(s[endIdx]) + 1);
    }

    mostFreqChar = Math.max(mostFreqChar, charFreq.get(s[endIdx]));

    if (endIdx - startIdx + 1 - mostFreqChar > k) {
      charFreq.set(s[startIdx], charFreq.get(s[startIdx]) - 1);
      startIdx++;
    }

    longestLength = Math.max(longestLength, endIdx - startIdx + 1);
    endIdx++;
  }

  return longestLength;
}
