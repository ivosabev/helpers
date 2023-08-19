export function round(n: number, precision = 2) {
  return +`${Math.round(Number(`${n}e+${precision}`))}e-${precision}`;
}
