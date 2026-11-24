import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ✅ FIX #4: Optimized Vite build config
export default defineConfig({
  plugins: [react()],

  server: {
    port: 5173,
    host: true,
  },

  build: {
    // Target modern browsers — smaller output
    target: 'es2020',

    // Warn if any chunk > 600KB
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // ✅ Split vendor chunks — React, router, lucide separate
        manualChunks: {
          'vendor-react':  ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],
          'vendor-lucide': ['lucide-react'],
        },
      },
    },
  },

  // ✅ Faster dev builds with esbuild
  esbuild: {
    // Strip console.log in production
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
});
