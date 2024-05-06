import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: '/src/components' },
      { find: '@api', replacement: '/src/api' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@assets', replacement: '/src/assets' }
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/index.scss";`
      }
    }
  }
})