// Credits: https://dev.to/tipsy_dev/advanced-typescript-reinventing-lodash-get-4fhe

type GetFieldType<Obj, Path> = Path extends `${infer Left}.${string}`
  ? Left extends keyof Obj
    ? Obj[Left]
    : undefined
  : Path extends keyof Obj
    ? Obj[Path]
    : undefined;

export function get<TData, TPath extends string, TDefault = GetFieldType<TData, TPath>>(
  data: TData,
  path: TPath,
  defaultValue?: TDefault
): GetFieldType<TData, TPath> | TDefault {
  const value = path
    .split(/[.[\]]/)
    .filter(Boolean)
    .reduce<GetFieldType<TData, TPath>>((value, key) => (value as any)?.[key], data as any);

  return value !== undefined ? value : (defaultValue as TDefault);
}
