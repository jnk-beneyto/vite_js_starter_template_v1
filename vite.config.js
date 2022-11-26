import { resolve as pathResolve } from 'path'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    commonjsOptions: {
      include: []
    }
  },
  optimizeDeps: {
    disabled: false
  },
  resolve: {
    alias: {
      '@': pathResolve('./src')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
