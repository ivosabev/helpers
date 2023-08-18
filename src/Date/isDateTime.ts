import {DateTime} from '.';

export const isDateTime = (obj: any) => {
  return typeof obj === 'object' && obj instanceof DateTime;
};
