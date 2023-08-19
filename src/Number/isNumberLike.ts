export const isNumberLike = (v: any) =>
  (typeof v === 'number' && !Number.isNaN(v)) || (typeof v === 'string' && !Number.isNaN(Number(String(v).trim() || undefined)));
