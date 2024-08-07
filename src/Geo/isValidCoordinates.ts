import {isValidLatitude} from './isValidLatitude.js';
import {isValidLongitude} from './isValidLongitude.js';

export const isValidCoordinates = ({latitude, longitude}: {latitude: number; longitude: number}): boolean =>
  isValidLatitude(latitude) && isValidLongitude(longitude);
