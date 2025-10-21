/**
 * Rounds a number to a specified precision.
 *
 * @example
 * // returns 999.99
 * round(285.71*3.5);
 *
 * @param n - The number to round.
 * @param [precision=2] - The decimal places to round to. *Default: 2*
 *
 * @returns The rounded number.
 *
 */
export function round(value: number, precision: number = 2) {
  const sign = value < 0 ? -1 : 1;
  const factor = 10 ** precision;
  const result = sign * Math.round(Math.abs(value * factor + 0.00000001)) / factor;
  return result === -0 ? 0 : result;
}
