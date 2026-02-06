import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  preview: {
    allowedHosts: [
      'app-loja.rbpezf.easypanel.host' // Adicione o seu domínio aqui
    ],
    host: '0.0.0.0',
    port: 3000
  }
})
