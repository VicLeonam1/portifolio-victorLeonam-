import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        contato: 'html/contato.html',
        obrigado: 'html/obrigado.html'
      }
    }
  }
})