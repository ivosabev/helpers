export const CardType = {
  AMEX: 'Amex',
  DISCOVER: 'Discover',
  JCB: 'JCB',
  MASTERCARD: 'Mastercard',
  VISA: 'Visa',
} as const;
export type CardType = typeof CardType[keyof typeof CardType];

export function getCardType(cardNumber: string): CardType | undefined {
  if (isVisa(cardNumber)) {
    return CardType.VISA;
  } else if (isMastercard(cardNumber)) {
    return CardType.MASTERCARD;
  } else if (isAmex(cardNumber)) {
    return CardType.AMEX;
  } else if (isDiscover(cardNumber)) {
    return CardType.DISCOVER;
  } else if (isJcb(cardNumber)) {
    return CardType.JCB;
  } else {
    return undefined;
  }
}

export function isVisa(cardNumber: string) {
  const isLength13Or16Or19 = cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19;
  const isStartsWith4 = cardNumber.startsWith('4');
  return isLength13Or16Or19 && isStartsWith4;
}

export function isMastercard(cardNumber: string) {
  const isLength16 = cardNumber.length === 16;
  const isBetween51And55 = Number(cardNumber.slice(0, 2)) >= 51 && Number(cardNumber.slice(0, 2)) <= 55;
  const isBetween2221And2720 = Number(cardNumber.slice(0, 4)) >= 2221 && Number(cardNumber.slice(0, 4)) <= 2720;
  return isLength16 && (isBetween51And55 || isBetween2221And2720);
}

export function isAmex(cardNumber: string) {
  const isLength15 = cardNumber.length === 15;
  const isStartsWith34 = cardNumber.startsWith('34');
  const isStartsWith37 = cardNumber.startsWith('37');
  return isLength15 && (isStartsWith34 || isStartsWith37);
}

export function isDiscover(cardNumber: string) {
  const isLength16 = cardNumber.length === 16;
  const isStartsWith6011 = cardNumber.startsWith('6011');
  const isBetween622126And622925 = Number(cardNumber.slice(0, 6)) >= 622126 && Number(cardNumber.slice(0, 6)) <= 622925;
  const isBetween644And649 = Number(cardNumber.slice(0, 3)) >= 644 && Number(cardNumber.slice(0, 3)) <= 649;
  const isStartsWith65 = cardNumber.startsWith('65');
  return isLength16 && (isStartsWith6011 || isBetween622126And622925 || isBetween644And649 || isStartsWith65);
}

export function isJcb(cardNumber: string) {
  const isLength16 = cardNumber.length === 16;
  const isBetween3528And3589 = Number(cardNumber.slice(0, 4)) >= 3528 && Number(cardNumber.slice(0, 4)) <= 3589;
  return isLength16 && isBetween3528And3589;
}
