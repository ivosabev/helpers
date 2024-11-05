/**
 * Всеки български гражданин има ЕГН и това го идентифицира еднозначно. ЕГН се
 * поддържа от ЕСГРАОН.
 *
 * Credits: https://github.com/petarov/bulgarian-control-numbers
 */

const CONTROLS = [2, 4, 8, 5, 10, 9, 7, 3, 6];

export function validateEgn(value: any) {
  value = String(value).trim();

  if (value.length !== 10) {
    return false;
  }

  let sum = 0;

  for (let i = 0; i < value.length - 1; i++) {
    // @ts-expect-error
    sum += ~~value.charAt(i) * CONTROLS[i];
  }

  let mod = sum % 11;
  mod = mod < 10 ? mod : 0;

  return mod === ~~value.charAt(9);
}

// TODO: Extract gender and birthday from EGN
// _parse = () => {
//   this._gender = ~~value.charAt(8) % 2 === 0 ? "m" : "f";

//   const day = ~~value.substr(4, 2);
//   let month = ~~this._value.substr(2, 2);
//   let year = ~~this._value.substr(0, 2);

//   if (month > 40) {
//     year += 2000;
//     month -= 40;
//   } else if (month > 20) {
//     year += 1800;
//     month -= 20;
//   } else {
//     year += 1900;
//   }

//   this._birthday = { year, month, day };
// };
