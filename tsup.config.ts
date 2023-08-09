// {
//   "splitting": true,
//   "sourcemap": true,
//   "clean": true,
//   "minify": true,
//   "dts": true,
//   "entry": ["server.ts"],
//   "$schema": "https://cdn.jsdelivr.net/npm/tsup/schema.json",
//   "target": "node14"
// }

import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['server.ts'],
    outDir: 'dist',
    target: 'node16',
    platform: 'node',
    format: ['esm'],
    splitting: false,
    sourcemap: true,
    minify: false,
    shims: true,
    dts: false,
  },
]);
