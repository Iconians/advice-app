import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://iconians.github.io/advice-app/",
  build: {outDir:"./build"},
  plugins: [react()]
})
