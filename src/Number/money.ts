const formatter0 = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
  style: 'currency',
});

const formatter2 = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
  style: 'currency',
});

export function money(value: number | string, round = false) {
  const formatter = round ? formatter0 : formatter2;
  return formatter.format(Number(value));
}
