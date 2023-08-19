export const toBoolean = (v: unknown, d?: any) => {
  if (v === false || v === 'false' || v === 0 || v === '0') {
    return false;
  }

  if (v === true || v === 'true' || v === 1 || v === '1') {
    return true;
  }

  if (typeof d !== 'undefined') {
    return d;
  }

  if (typeof v === 'undefined' || v === 'undefined' || v === 'null' || v === null) {
    return false;
  }

  return Boolean(v);
};
