export const parseGraphqlErrors = (data: any) => {
  // String
  if (typeof data === 'string' && data.length) {
    return [{message: data}];
  }

  // Array
  if (Array.isArray(data) && data[0] && data[0].message && data[0].message.length) {
    return data;
  }

  // Response Object
  if (data && data.res && data.res.status && [502, 503, 504].indexOf(data.res.status) !== -1) {
    return [{message: 'No connection to server!'}];
  }

  // TODO: Convert to an Unknown Error
  return [{message: 'Internal Error'}];
};
