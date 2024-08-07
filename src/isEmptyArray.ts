export const isEmptyArray = (v: unknown): v is [] => Array.isArray(v) && v.length === 0;
