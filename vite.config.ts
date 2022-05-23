import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: fileURLToPath(new URL('./assets', import.meta.url)),
  plugins: [WindiCSS({   
    scan: {
      include: ['./.vitepress/**/*'],
      dirs: ['.'], 
      fileExtensions: ['vue', 'js', 'ts', 'md'],
      },
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url))
    }
  }
})
