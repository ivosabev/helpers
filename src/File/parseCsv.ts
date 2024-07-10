import csv from 'papaparse';
import {isEmpty} from '../isEmpty';

export function parseCsv(rawData: string, rawOptions = {}) {
  const options = {
    header: true,
    skipEmptyLines: true,
    transform: (v: any) => String(v || '').trim(),
    ...rawOptions,
  };

  // HACK: Fix this hack once new paparase add transformFn to their API
  const filterFn = (row: any) => {
    for (const c in row) {
      if (!isEmpty(row[c])) {
        return true;
      }
    }
    return false;
  };

  const data = csv.parse(rawData, options).data.filter(filterFn);
  if (data.length === 0) {
    throw new Error('Import file is empty');
  }

  return data;
}
