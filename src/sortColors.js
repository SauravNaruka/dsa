function sortColors(colors) {
  let left = 0;
  let current = 0;
  let right = colors.length - 1;

  while (current <= right) {
    if (colors[current] === 0) {
      swap(colors, left, current);
      left++;
      current++;
    } else if (colors[current] === 2) {
      swap(colors, right, current);
      right--;
    } else {
      current++;
    }
  }

  return colors;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

export { sortColors };
