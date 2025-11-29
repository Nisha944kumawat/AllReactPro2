import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // Local → "/"
  // GitHub Pages → "/AllReactPro2/"
  base: process.env.NODE_ENV === 'production'
    ? "/AllReactPro2/"
    : "/",
})

