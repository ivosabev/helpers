import camelCase from 'lodash/camelCase';
import {upperFirst} from './upperFirst';

export function pascalCase(str: string): string {
  return upperFirst(camelCase(str));
}
