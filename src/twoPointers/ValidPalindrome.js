export function isPalindrome(s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end]) return false;
    start++;
    end--;
  }
  return true;
}

export function isPalindromeBySkippingOneCharacter(s) {
  let start = 0;
  let end = s.length - 1;
  let isMismatchedOnce = false;

  while (start < end) {
    if (s[start] === s[end]) {
      start++;
      end--;
    } else if (isMismatchedOnce) {
      return false;
    } else if (s[start + 1] === s[end]) {
      start++;
      isMismatchedOnce = true;
    } else if (s[start] === s[end - 1]) {
      end--;
      isMismatchedOnce = true;
    } else {
      return false;
    }
  }
  return true;
}
