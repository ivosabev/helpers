/**
 * Булстат е идентификатор, какъвто има всяка фирма в България. Булстатът може
 * да бъде 9, 10 или 13 знака.
 *
 * Credits: https://github.com/petarov/bulgarian-control-numbers
 */

const CONTROLS_9_1 = [1, 2, 3, 4, 5, 6, 7, 8];
const CONTROLS_9_2 = [3, 4, 5, 6, 7, 8, 9, 10];
const CONTROLS_13_1 = [2, 7, 3, 5];
const CONTROLS_13_2 = [4, 9, 5, 7];

export function validateCin(value: string) {
  value = String(value).trim();

  if (value.length > 2 && value.substr(0, 2) == 'BG') {
    value = value.substring(2);
  }

  if (value.length !== 9 && value.length !== 13) {
    return false;
  }

  const val = [];

  for (let i = 0; i < value.length; i++) {
    val[i] = ~~value.charAt(i);
  }

  let sum = 0;
  for (let i = 0; i < 8; i++) {
    sum += val[i] * CONTROLS_9_1[i];
  }

  let mod = sum % 11;
  if (mod > 9) {
    sum = 0;
    for (let i = 0; i < 8; i++) {
      sum += val[i] * CONTROLS_9_2[i];
    }

    mod = sum % 11;
    mod = mod > 9 ? 0 : mod;
  }

  if (value.length === 9) {
    return mod === val[8];
  }

  // set control for 9-digit BULSTAT
  val[8] = mod;

  sum = 0;
  for (let i = 8; i < 12; i++) {
    sum += val[i] * CONTROLS_13_1[i - 8];
  }

  mod = sum % 11;
  if (mod > 9) {
    sum = 0;
    for (let i = 8; i < 12; i++) {
      sum += val[i] * CONTROLS_13_2[i - 8];
    }

    mod = sum % 11;
    mod = mod > 9 ? 0 : mod;
  }

  return mod === val[12];
}
