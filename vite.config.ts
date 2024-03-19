import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import alias from '@rollup/plugin-alias';


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080
  },
  plugins: [
    react(), 
    alias({
      entries: [{ find: '@', replacement: '/src' }]
    }),
  ],
})
