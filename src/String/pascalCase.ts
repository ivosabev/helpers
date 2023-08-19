import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';

export function pascalCase(str: string): string {
  return upperFirst(camelCase(str));
}
