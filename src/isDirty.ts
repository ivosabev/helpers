export const isDirty = (a: any | null | undefined, b: any | null | undefined, isEqual: () => boolean) => {
  const isDirty = !(typeof a === 'undefined' || typeof b === 'undefined' || a === b || (a && b && isEqual()));

  if (isDirty) {
    console.log(
      'isDirty',
      a,
      b,
      typeof a === 'undefined',
      typeof b === 'undefined',
      a === b,
      isEqual(),
      !(typeof a === 'undefined' || typeof b === 'undefined' || a === b || (a && b && isEqual()))
    );
  }

  return isDirty;
};
