export const isNumberLike = (v: any): v is number | string =>
  (typeof v === 'number' && !Number.isNaN(v)) || (typeof v === 'string' && !Number.isNaN(Number(String(v).trim() || undefined)));
