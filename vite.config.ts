import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode, isSsrBuild }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        // Same value in the client and SSR bundles, so prerendered dates hydrate without mismatch.
        __BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 10)),
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      publicDir: 'public',
      build: {
        // The SSR bundle (dist-ssr) is only used at build time to prerender the pages.
        copyPublicDir: !isSsrBuild,
        rollupOptions: {
          output: {
            // Ensure sitemap.xml is copied to dist
            assetFileNames: (assetInfo) => {
              if (assetInfo.name === 'sitemap.xml' || assetInfo.name === 'robots.txt') {
                return '[name][extname]';
              }
              return 'assets/[name]-[hash][extname]';
            }
          }
        }
      }
    };
});
