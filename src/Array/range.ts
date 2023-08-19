export function range(min: number, max: number) {
  if (min > max) {
    return _range(max, min).reverse();
  } else {
    return _range(min, max);
  }
}

function _range(min: number, max: number) {
  const len = max - min + 1;
  const arr = new Array(len);
  for (let i = 0; i < len; i += 1) {
    arr[i] = min + i;
  }
  return arr;
}
