export function range(min: number, max: number) {
  if (min > max) {
    return _range(max, min).reverse();
  } else {
    return _range(min, max);
  }
}

function _range(min: number, max: number) {
  return Array.from({length: max - min + 1}, (_, i) => min + i);
}
