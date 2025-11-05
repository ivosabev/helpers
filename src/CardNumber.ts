import z from 'zod';
import {getCardType, type CardType} from './CardType.js';

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
  .transform((val) => val.replace(/\s+/g, '')) // Remove spaces
  .refine((val) => luhnCardNumberCheck(val), {
    message: 'Invalid card number. Please check and try again.',
  });
export type CardNumber = z.infer<typeof cardNumberSchema>;

export function createCardNumberSchema(cardTypes: CardType[]) {
  return cardNumberSchema.refine((v) => {
    const type = getCardType(v);
    return type && cardTypes.includes(type);
  }, {
    message: 'Invalid card type. Supported types are: ' + cardTypes.join(', '),
  });
}
