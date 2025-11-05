import z from 'zod';

/**
 * Luhn algorithm for credit card validation
 * @param cardNumber - The card number as a string (digits only)
 * @returns true if the card number passes the Luhn checksum
 */
export function luhnCardNumberCheck(cardNumber: string): boolean {
  // Remove any non-digit characters
  const digits = cardNumber.replace(/\D/g, '');
  if (digits.length !== 16) {
    return false;
  }

  let sum = 0;
  let isEven = false;

  // Process from right to left
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i]!, 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
}

export const cardNumberSchema = z
  .string()
  .refine((v) => {
    const digits = v.replace(/\D/g, '');
    return digits.length === 16;
  }, {
    message: 'Card number must be 16 digits.',
  })
  .refine((val) => luhnCardNumberCheck(val), {
    message: 'Invalid card number. Please check and try again.',
  });
export type CardNumber = z.infer<typeof cardNumberSchema>;

export const mastercardCardNumberSchema = cardNumberSchema.refine((val) => {
  const digits = val.replace(/\D/g, '');
  return /^5[1-5]/.test(digits) || /^(2221|2720)/.test(digits);
}, {
  message: 'Invalid Mastercard number. Must start with digits 51 through 55 or 2221-2720.',
});

export const visaCardNumberSchema = cardNumberSchema.refine((val) => {
  const digits = val.replace(/\D/g, '');
  return /^4/.test(digits);
}, {
  message: 'Invalid Visa card number. Must start with digit 4.',
});
