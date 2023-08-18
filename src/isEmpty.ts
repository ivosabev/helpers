// Empty values: undefined, null, '', [], {}
export default function isEmpty(v: any): boolean {
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
    if (v.constructor === Array && v.length === 0) {
      return true;
    }
  }

  return false;
}
