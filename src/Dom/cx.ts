export function cx(...classNames: any[]) {
  return classNames
    .filter(Boolean)
    .map((v) => String(v).trim())
    .join(' ');
}
