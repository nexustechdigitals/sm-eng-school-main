import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import imagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    react(),
    imagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 75,
        progressive: true,
      },
      pngquant: {
        quality: [0.6, 0.8],
        speed: 4,
      },
      webp: {
        quality: 75,
      },
      svg: {
        multipass: true,
        full: true,
      },
    }),
  ],
  build: {
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'icons': ['react-icons'],
        },
      },
    },
    // Optimized output
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    // Enable CSS minification
    cssMinify: true,
    // Set a reasonable chunk size warning limit
    chunkSizeWarningLimit: 500,
    // Source maps only in development
    sourcemap: false,
    // Optimize images during build
    assetsInlineLimit: 4096,
  },
  server: {
    host: true, // Ye line Network IP ko expose karegi
    port: 5173, // Aap chahein toh port change bhi kar sakte hain
    // Enable compression during dev
    middlewareMode: false,
    // Hot module replacement
    hmr: true,
  },
  // Environment variables
  define: {
    __APP_VERSION__: JSON.stringify('1.0.0'),
  },
})
