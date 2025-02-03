import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "localhost", // Set URL to predetermined localhost:3000 for connecting Api
    port: 3000,
  },
  plugins: [react()],
})
