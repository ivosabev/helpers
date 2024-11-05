import fuzzysort from 'fuzzysort';
import bulgarianPostCodes from './bulgarianPostCodes.json' with {type: 'json'};

const TYPES = [
  {name: 'гр.', nameEm: 'gr.'},
  {name: 'с.', nameEm: 's.'},
  {name: 'к.', nameEm: 'k.'},
  {name: 'к.к.', nameEm: 'k.k'},
  {name: 'лет.', nameEm: 'let.'},
  // ?
  {name: 'т.ц.', nameEm: 't.t'},
  {name: 'в.с.', nameEm: 'v.s'},
  {name: 'к.м.', nameEm: 'k.m'},
  {name: 'с.ман.', nameEm: 's.m'},
];

function getWeight(a: Record<string, any>) {
  return TYPES.findIndex((v) => v.name === a['type']);
}

export function getCityByCityOrZip(cityOrZip: string) {
  return [
    ...fuzzysort.go(cityOrZip, bulgarianPostCodes, {
      all: false,
      keys: ['name', 'zip'],
      limit: 10,
      threshold: -25,
    }),
  ]
    .sort((a, b) => {
      const wA = getWeight(a.obj);
      const wB = getWeight(b.obj);

      if (wA === wB) {
        return -1 * a.score - -1 * b.score;
      }

      return wA - wB;
    })
    .map((v) => v.obj);
}
