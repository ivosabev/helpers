/**
 * ЛНЧ - Личен номер на чужденец се издава на всички чужденци, които
 * възнамеряват да пребивават продължително време в България. Издава се от МВР.
 *
 * Credits: https://github.com/petarov/bulgarian-control-numbers
 */

const CONTROLS = [21, 19, 17, 13, 11, 9, 7, 3, 1];

export function validatePn(value: any) {
  value = String(value).trim();

  if (value.length !== 10) {
    return false;
  }

  let sum = 0;

  for (let i = 0; i < value.length - 1; i++) {
    sum += ~~value.charAt(i) * CONTROLS[i];
  }

  const mod = sum % 10;
  return mod === ~~value.charAt(9);
}
