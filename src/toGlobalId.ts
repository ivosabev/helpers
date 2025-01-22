export function toGlobalId(id: number | string, type: string) {
  return Buffer.from(`${type}:${id}`, 'utf8').toString('base64');
}
