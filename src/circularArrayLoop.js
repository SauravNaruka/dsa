export function nextStep(pointer, value, size) {
  let result = (pointer + value) % size;
  if (result < 0) {
    result += size;
  }
  return result;
}

export default nextStep;
