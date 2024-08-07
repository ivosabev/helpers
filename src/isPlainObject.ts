export const isPlainObject = (obj: any): obj is Object => Object.prototype.toString.call(obj) === '[object Object]';
