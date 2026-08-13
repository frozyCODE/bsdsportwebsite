import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import fs from 'fs'

// Plugin pour servir les fichiers PDF directement dans le navigateur (Content-Disposition: inline)
const servePdfPlugin = () => ({
  name: 'serve-pdf-middleware',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const urlPath = req.url.split('?')[0]
      if (urlPath.endsWith('.pdf')) {
        const fileName = decodeURIComponent(urlPath.replace(/^\//, ''))
        const filePath = path.resolve(__dirname, 'public', fileName)
        if (fs.existsSync(filePath)) {
          res.setHeader('Content-Type', 'application/pdf')
          res.setHeader('Content-Disposition', 'inline')
          return fs.createReadStream(filePath).pipe(res)
        }
      }
      next()
    })
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), servePdfPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
