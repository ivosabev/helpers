export const random = (rawMin: number, rawMax: number) => {
  const min = Math.ceil(rawMin);
  const max = Math.floor(rawMax);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
