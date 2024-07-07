import {calcPercentage} from './calcPercentage';
import {isNumberLike} from './isNumberLike';
import {toNumber} from './toNumber';

export function percentage(value: number | string, precision?: number): string;
export function percentage([a, b]: [number, number], precision?: number): string;
export function percentage([a, b]: [string, string], precision?: number): string;
export function percentage(value: any | string, precision = 0) {
  let percentage = 0;
  if (Array.isArray(value) && value.length === 2) {
    percentage = calcPercentage(value[0], value[1]);
  } else if (isNumberLike(value)) {
    percentage = toNumber(value, 0);
  } else {
    // TODO: Error
  }

  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: precision,
    minimumFractionDigits: precision,
    style: 'percent',
  })
    .format(percentage)
    .replace('.00', '');
}
