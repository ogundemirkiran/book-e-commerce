import { configDefaults, defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue'; //add this line

export default defineConfig({
  plugins: [vue()],
  resolve: {
    conditions: []
  },

  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'packages/template/*'],
    alias: {
      '~/': __dirname + '/',
      '@/': __dirname + '/',
      '@/*': __dirname + '/*',
      '~/*': __dirname + '/*',
      '~~/*': __dirname + '/*',
      '@@/*': __dirname + '/*',
      '~~': __dirname + '/',
      '@@': __dirname + '/',
      '@': __dirname + '/',
      '~': __dirname + '/'
    }
  }
});
