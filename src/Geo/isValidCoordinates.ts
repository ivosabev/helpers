import {isValidLatitude} from './isValidLatitude';
import {isValidLongitude} from './isValidLongitude';

export const isValidCoordinates = ({latitude, longitude}: {latitude: number; longitude: number}): boolean =>
  isValidLatitude(latitude) && isValidLongitude(longitude);
