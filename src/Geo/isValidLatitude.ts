import {isNumberLike} from '../Number/isNumberLike';

export const isValidLatitude = (latitude: number): boolean => isNumberLike(latitude) && Number(latitude) > -90 && Number(latitude) < 90;
