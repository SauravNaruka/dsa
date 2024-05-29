export function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  let isMismatchedOnce = false;

  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      if (isMismatchedOnce) {
        return false;
      } else if (s[left + 1] === s[right]) {
        left++;
      } else if (s[left] === s[right - 1]) {
        right--;
      } else {
        return false;
      }
      isMismatchedOnce = true;
    }
  }
  return true;
}
