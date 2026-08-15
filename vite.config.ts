import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import path from 'node:path'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

const config = defineConfig({
  server: {
    proxy: {
      '/server': {
        target: 'http://localhost:3001/',
        rewrite: (_path) => _path.replace(/^\/server/, ''),
        changeOrigin: true,
      },
    },
  },
  resolve: {
    tsconfigPaths: true,
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackStart({ spa: { enabled: true } }),
    viteReact(),
    svgr(),
  ],
})

export default config
