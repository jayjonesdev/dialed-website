import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Not an SPA: without this, dev and preview rewrite /privacy to index.html
  // and hide the real routing, which production static hosting does not do.
  appType: 'mpa',
  build: {
    // Multi-page rather than a router: /privacy and /terms build to real files,
    // so they need no SPA rewrite rule at the host.
    rollupOptions: {
      input: {
        main: 'index.html',
        privacy: 'privacy/index.html',
        terms: 'terms/index.html',
      },
    },
  },
})
