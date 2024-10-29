export function tokenize(str: string, separator = ' ') {
  // @ts-ignore
  return String(str || '')
    .match(/\\?.|^$/g)
    .reduce(
      (p: any, c) => {
        if (c === '"') {
          p.quote ^= 1;
        } else if (!p.quote && c === separator) {
          p.a.push('');
        } else {
          p.a[p.a.length - 1] += c.replace(/\\(.)/, '$1');
        }
        return p;
      },
      {a: ['']}
    )
    .a.filter(Boolean);
}
