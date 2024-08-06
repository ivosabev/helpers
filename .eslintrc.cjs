/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@ivosabev/eslint-config', '@ivosabev/eslint-config/node'],
  parserOptions: {
    project: './tsconfig.json',
  },
};
