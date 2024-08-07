export type Optional<T> = T | undefined | null;
export type OptionalKey<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
export type OptionalKeys<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
