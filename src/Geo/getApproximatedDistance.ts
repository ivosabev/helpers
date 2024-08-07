import {round} from '../Number/round.js';
import {toRadians} from '../Number/toRadians.js';

type Latitude = number;
type Longitude = number;
type Point = [Latitude, Longitude];

// Returns distance in meters
export function getApproximatedDistance(origin: Point, destination: Point) {
  const EARTH_RADIUS = 6378137; // Earth’s mean radius in meter

  const [originLatitude, originLongitude] = origin;
  const [destinationLatitude, destinationLongitude] = destination;

  const deltaLatitude = toRadians(destinationLatitude - originLatitude);
  const deltaLongitude = toRadians(destinationLongitude - originLongitude);

  const a =
    Math.sin(deltaLatitude / 2) * Math.sin(deltaLatitude / 2) +
    Math.cos(toRadians(originLatitude)) *
      Math.cos(toRadians(destinationLatitude)) *
      Math.sin(deltaLongitude / 2) *
      Math.sin(deltaLongitude / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = EARTH_RADIUS * c;

  return round(distance, 0);
}
