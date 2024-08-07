import camelCase from 'lodash/camelCase.js';
import {upperFirst} from './upperFirst.js';

export function pascalCase(str: string): string {
  return upperFirst(camelCase(str));
}
