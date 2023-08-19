const jsxRuntime = require('react/jsx-runtime');

const newlineRegex = /(\r\n|\r|\n)/g;

export const nl2br = (str: any) => {
  if (typeof str !== 'string') {
    return str;
  }

  return str.split(newlineRegex).map((line, index) => {
    if (line.match(newlineRegex)) {
      return jsxRuntime.jsx('br', {key: index});
    }
    return line;
  });
};
