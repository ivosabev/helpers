export function mapEdgesToArray(data: any | null, key: string): any[] {
  return ((data?.viewer || data)?.[key]?.edges || []).map((v: any) => v.node);
}
