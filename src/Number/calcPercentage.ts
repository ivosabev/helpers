import {toNumber} from './toNumber';

export const calcPercentage = (_a: number, _b: number) => {
  const a = toNumber(_a);
  const b = toNumber(_b);
  return a && b && b > 0 ? Math.round((a / b) * 100) : 0;
};
