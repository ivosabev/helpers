/**
 * Rounds a number to a specified precision.
 *
 * @param n - The number to round.
 * @param [precision=2] - The number of decimal places to round to. *Default: 2*
 * @returns The rounded number.
 */
export function round(n: number, precision = 2) {
  return +`${Math.round(Number(`${n}e+${precision}`))}e-${precision}`;
}
