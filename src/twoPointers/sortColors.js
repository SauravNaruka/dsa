export function sortColors(colors) {
  let left = 0;
  let ptr = 0;
  let right = colors.length - 1;

  while (ptr <= right) {
    if (colors[ptr] === 0) {
      swap(colors, ptr, left);
      left++;
      ptr++;
    } else if (colors[ptr] === 2) {
      swap(colors, ptr, right);
      right--;
    } else {
      ptr++;
    }
  }

  return colors;
}

function swap(array, i, j) {
  //   [array[p1], array[p2]] = [array[p2], array[p1]];
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
