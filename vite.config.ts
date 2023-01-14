/// <reference types="vitest" />
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import react from '@vitejs/plugin-react'
// @ts-ignore
import nodePolyfills from 'vite-plugin-node-stdlib-browser'

export default defineConfig({
  plugins: [RubyPlugin(), react(), nodePolyfills()],
  resolve: {},
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts',
    includeSource: ['src/**/*.test.{js,ts}'],
    exclude: ['src/constants.ts'],
    resolveSnapshotPath: (testPath, snapExtension) => testPath + snapExtension,
    css: true,
  },
  // optimizeDeps: {
  //   esbuildOptions: {
  //     // Node.js global to browser globalThis
  //     define: {
  //       global: 'globalThis'
  //     },
  //     // Enable esbuild polyfill plugins
  //     plugins: [
  //       NodeGlobalsPolyfillPlugin({
  //         process: true,
  //         buffer: true
  //       }),
  //       NodeModulesPolyfillPlugin()
  //     ]
  //   }
  // },
  // build: {
  //   rollupOptions: {
  //     plugins: [rollupNodePolyFill()]
  //   }
  // }
})
