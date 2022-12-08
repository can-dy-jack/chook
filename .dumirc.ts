import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  logo: '/chook/logo.jpg',
  favicons: ['/chook/logo.jpg'],
  base: "/chook/",
  publicPath: "/chook/",
  themeConfig: {
    name: 'chook'
  },
  theme: {
    '@c-primary': '#0d6efd',
  },
});
