export const isNumberLike = (v: any) =>
  typeof v === 'number' || (typeof v === 'string' && !Number.isNaN(Number(String(v).trim() || undefined)));
