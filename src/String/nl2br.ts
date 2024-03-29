import {jsx as _jsx} from 'react/jsx-runtime';

const newlineRegex = /(\r\n|\r|\n)/g;

export const nl2br = (str: any) => {
  if (typeof str !== 'string') {
    return str;
  }

  return str.split(newlineRegex).map((line, index) => {
    if (line.match(newlineRegex)) {
      return _jsx('br', {key: index});
    }
    return line;
  });
};
