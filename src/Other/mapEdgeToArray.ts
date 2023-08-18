export const mapEdgesToArray = (viewer: any | null, key: string): any[] =>
  ((viewer && viewer[key] && viewer[key].edges) || []).map((v: any) => v.node);
