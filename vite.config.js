import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsInlineLimit: 0,
  },
  plugins: [react(), svgr()],
})
