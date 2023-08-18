import {camelCase, upperFirst} from 'lodash';

export default function pascalCase(str: string): string {
  return upperFirst(camelCase(str));
}
