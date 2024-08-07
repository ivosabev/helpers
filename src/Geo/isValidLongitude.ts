import {isNumberLike} from '../Number/isNumberLike.js';

export const isValidLongitude = (longitude: number): boolean =>
  isNumberLike(longitude) && Number(longitude) > -180 && Number(longitude) < 180;
