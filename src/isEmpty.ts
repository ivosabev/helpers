// Empty values: undefined, null, '', [], {}
// TODO: Improve, maybe like https://stackoverflow.com/questions/52188387/typescript-generic-type-guard-for-isempty-function
export function isEmpty(v: unknown): v is undefined | null | '' | {} | [] {
  if (typeof v === 'undefined' || v === 'undefined' || v === null || v === 'null') {
    return true;
  }
  if (typeof v === 'string' && v.length === 0) {
    return true;
  }
  if (typeof v === 'object') {
    if (v.constructor === Object && Object.keys(v).length === 0) {
      return true;
    }
    if (v.constructor === Array && (v as any[]).length === 0) {
      return true;
    }
  }

  return false;
}
