import {round} from '../Number/round.js';

export type GetApproximatedDurationOptions = {
  approximatedLongTravelModifier: number;
  approximatedShortTravelLimit: number;
  approximatedShortTravelModifier: number;
};

// TODO: Internalization
// Duration should be verbalized like '3 hours 8 minutes'
// Distance should be verbalized like '1 401 km'
// duration_in_traffic should be duration with some weight constant to make it a bigger value

// Based on Metro data 72000 records we have estimated the following speed brackets with the assumption that
// longer distances take less time due to higher speed and created a formula that works for values above 10km
// The data shows that >10km is inter city driving and fit the formula 50 + 35 * LOG(0.00005 * distance)
// In city driving is set at 30 km/h

// Returns duration in seconds
export function getApproximatedDuration(distance: number, options?: GetApproximatedDurationOptions) {
  // TODO: Improve formula based on real data for each client
  // 1.9 is modifier added for EBAG

  // technomarket 1.6
  // default 1.9

  const {approximatedLongTravelModifier = 1, approximatedShortTravelLimit = 10000, approximatedShortTravelModifier = 1} = options || {};

  const shortDistanceSpeed = 8.33;
  const longDistanceSpeed = (50 + 35 * Math.log(0.00005 * distance)) / 3.6;
  const speed = distance < approximatedShortTravelLimit ? shortDistanceSpeed : longDistanceSpeed;
  const modifier = distance < approximatedShortTravelLimit ? approximatedShortTravelModifier : approximatedLongTravelModifier;
  const duration = (distance / speed) * modifier;

  return round(duration, 0);
}
