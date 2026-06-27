import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  preview: {
    host: '0.0.0.0', // Important: Bind to all network interfaces
    port: process.env.PORT || 3000 // Use Render's PORT environment variable
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  }
})