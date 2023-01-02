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
  styles: [
    `::-webkit-scrollbar {height: 6px;width: 6px;background-color: transparent;}`,
    `::-webkit-scrollbar-thumb {background: rgba(13, 110, 253, .5);height: 5px;width: 5px;}`,
  ]
});
