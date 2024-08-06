// Takes a list of UTC timezones and converts them into a friendly formatted json
// Input: https://github.com/dmfilipenko/timezones.json/blob/master/timezones.json
// Output: {'UTC':'+00:00', Europe/Sofia':'+03:00', ...}

import fs from 'node:fs';

export function formatOffset(offset: any) {
  const parts = String(offset).split('.');

  const offsetSign = parts[0].indexOf('-') !== -1 ? '-' : '+';
  const integerPart = parts[0].replace(offsetSign, '');
  const formattedHour = `${offsetSign}${integerPart.length === 1 ? `0${integerPart}` : integerPart}`;

  return parts.length === 1 ? `${formattedHour}:00` : `${formattedHour}:${Number(`.${parts[1]}`) * 60}`;
}

export function formatTimezones(timezones: any) {
  const data = timezones.reduce((p: any, c: any) => {
    const subZones = c.utc;
    subZones.forEach((zone: any) => {
      p[zone] = formatOffset(c.offset);
    });

    return p;
  }, {});

  // Add utc zone
  data.UTC = '+00:00';

  fs.writeFileSync('timezone.json', JSON.stringify(data));
}
