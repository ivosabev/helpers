import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import sourceMaps from 'rollup-plugin-sourcemaps';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist/esm',
      // exports: 'named',
      format: 'esm',
      // preserveModules: true,
    },
    {
      dir: 'dist/cjs',
      // exports: 'named',
      format: 'cjs',
      // preserveModules: true,
    },
  ],
  plugins: [resolve(), typescript(), commonjs({include: 'node_modules/**'}), json(), sourceMaps()],
};
