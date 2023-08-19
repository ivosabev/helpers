// TODO: Export from somewhere where it can be imported into multiple files and used
type PropertyName = string | number | symbol;
type Many<T> = T | ReadonlyArray<T>;
type GlobalPartial<T> = Partial<T>;
type PartialObject<T> = GlobalPartial<T>;

// NOTE: TypeScript signatures copied from lodash
export function omit<T extends object, K extends PropertyName[]>(obj: T | null | undefined, paths: K): Pick<T, Exclude<keyof T, K[number]>>;
export function omit<T extends object, K extends keyof T>(obj: T | null | undefined, paths: Array<Many<K>>): Omit<T, K>;
export function omit<T extends object>(object: T | null | undefined, paths: Array<Many<PropertyName>>): PartialObject<T>;
export function omit(obj: any, paths: any[]) {
  const objCopy = {...obj};
  paths.forEach((prop) => delete objCopy[prop]);
  return objCopy;
}
