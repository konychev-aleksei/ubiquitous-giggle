import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  base: '/ubiquitous-giggle/host/',
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        remote: 'remote@https://konychev-aleksei.github.io/ubiquitous-giggle/remote/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 5000
  }
})
