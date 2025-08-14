import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTagger from "vite-tagger"

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      viteTagger({ prefixName: "wb" }),
    ],
    server: {
      host: "::",
      port: 8080,
      allowedHosts: true,
    },
  }
})