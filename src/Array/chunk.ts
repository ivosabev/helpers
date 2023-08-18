export const chunk = (arr: any[], size: number, overlap = false) => {
  const chunks = [];

  for (let i = 0; i < arr.length; i += size - (overlap ? 1 : 0)) {
    const chunk = arr.slice(i, i + size);

    if (overlap && chunk.length === 1) {
      continue;
    }

    chunks.push(chunk);
  }

  return chunks;
};
