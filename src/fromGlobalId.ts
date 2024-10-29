export const fromGlobalId = (globalId: string) => {
  try {
    const unbasedGlobalId = Buffer.from(globalId, 'base64').toString();
    const delimiterPos = unbasedGlobalId.indexOf(':');

    const id = unbasedGlobalId.substring(delimiterPos + 1);
    const type = unbasedGlobalId.substring(0, delimiterPos);

    if (type) {
      return {id, type};
    }
    return {id: globalId, type: ''};
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return {
      id: globalId,
      type: '',
    };
  }
};
