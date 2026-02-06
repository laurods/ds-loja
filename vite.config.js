import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  preview: {
    allowedHosts: true, // Permite qualquer host no modo preview
    host: '0.0.0.0',
    port: 3000
  }
})
