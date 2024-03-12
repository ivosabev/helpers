/**
 * IBAN е стандарт за международен номер на банкова сметка. Концепцията за
 * международен номер на банкова сметка (International Bank Account Number) е
 * разработена от Европейския комитет за банкови стандарти (EBS 204/август 2003)
 * съвместно с Международната организация по стандартизация (ISO) и е
 * международно признат стандарт ISO 13616:2003. В България е приет от
 * Българския комитет по стандартизация, като стандарт БДС ISO 13616:2004
 * Международен номер на банкова сметка (IBAN) на Българския институт по
 * стандартизация.
 *
 * BGkk bbbb ssss ttcc cccc cc
 *
 * b = BIC bank code
 * s = Branch (BAE) number
 * t = Account type
 * c = Account number
 *
 * Credits: https://github.com/petarov/bulgarian-control-numbers
 */

const MAX_LEN = 22;

export function validateIban(value: any) {
  value = String(value).trim();

  value = value.replace(/\s/g, '');
  if (value.length !== MAX_LEN) {
    return false;
  }

  // Rearrange
  const transformed = value.substring(4) + value.substr(0, 4);

  // Convert to integer
  const digits = [];

  for (let i = 0; i < transformed.length; i++) {
    const ch = transformed.charAt(i);
    if (ch >= 'a' && ch <= 'z') {
      digits[i] = ch.charCodeAt(0) - 97 + 10;
    } else if (ch >= 'A' && ch <= 'Z') {
      digits[i] = ch.charCodeAt(0) - 65 + 10;
    } else {
      digits[i] = ch;
    }
  }

  // Compute remainder
  return 1 === modulo(Number(digits.join('')), 97);
}

// credits go to - https://stackoverflow.com/a/16019504
function modulo(divident: number, divisor: number) {
  const partLength = 10;

  while (String(divident).length > partLength) {
    const part = Number(String(divident).substring(0, partLength));
    divident = Number((part % divisor) + String(divident).substring(partLength));
  }

  return divident % divisor;
}
