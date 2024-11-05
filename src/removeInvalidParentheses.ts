const isValid = (p: string) => {
  if (p[0] === ')') {
    return false;
  }
  if (p[p.length - 1] === '(') {
    return false;
  }

  let counter = 0;

  for (let i = 0; i < p.length; i += 1) {
    if (p[i] === '(') {
      counter += 1;
    }
    if (p[i] === ')') {
      counter -= 1;
    }
  }

  return counter === 0;
};

export function removeInvalidParentheses(s: string) {
  if (isValid(s)) {
    return s;
  }

  const collection = new Set();

  for (let i = 0; i < s.length; i += 1) {
    let p;
    if (i === 0) {
      p = s.slice(1, s.length);
    }
    p = s.slice(0, i) + s.slice(i + 1, s.length);

    if (isValid(p)) {
      collection.add(p);
    }
  }

  return Array.from(collection).toString();
}
