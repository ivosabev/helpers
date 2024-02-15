export function fromStringToJSON(v: FormDataEntryValue) {
  if (!(v instanceof File)) {
    if (String(v) === 'undefined' || String(v) === 'NaN') {
      return undefined;
    }
    if (String(v) === 'null' || String(v).trim() === '') {
      return null;
    }
    if (
      typeof v !== 'object' &&
      ((v.indexOf('{') === 0 && v.indexOf('}') === v.length - 1) || (v.indexOf('[') === 0 && v.indexOf(']') === v.length - 1))
    ) {
      return JSON.parse(v);
    }
  }

  return v;
}
