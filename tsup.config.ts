import {defineConfig} from 'tsup';

export default defineConfig((options) => {
  return {
    bundle: false,
    clean: true,
    dts: true,
    entry: ['src/**/*.(ts|tsx)'],
    external: ['fs', 'path', 'stream', 'node:fs', 'node:path', 'node:stream'],
    format: ['cjs', 'esm'],
    outDir: 'dist',
    sourcemap: true,
    splitting: true,
    treeshake: true,
  };
});
