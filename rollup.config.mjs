import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import sourceMaps from 'rollup-plugin-sourcemaps';

export default {
  external: [/node_modules/],
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist/esm',
      format: 'esm',
      sourcemap: true,
    },
    {
      dir: 'dist/cjs',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [resolve(), typescript({tsconfig: './tsconfig.build.json'}), commonjs({include: 'node_modules/**'}), json(), sourceMaps()],
};
