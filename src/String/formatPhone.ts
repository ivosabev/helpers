import {isEmpty} from '../isEmpty.js';

export const formatPhone = (v: unknown) => {
  if (isEmpty(v)) {
    return '';
  }

  const tmp = String(v).replace(/\D/g, '');
  return `${tmp.substring(0, 3)}-${tmp.substring(3, 6)}-${tmp.substring(6)}`;
};
