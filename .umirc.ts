import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'chook',
  favicon: 'https://avatars.githubusercontent.com/u/62332701?s=40&v=4',
  logo: 'https://avatars.githubusercontent.com/u/62332701?s=40&v=4',
  outputPath: 'dist',
  mode: 'site',
  base: "/chook/",
  navs: [
    null,
    {
      title: "友链",
      children: [
        {
          title: "ahook",
          path: "https://ahooks.js.org"
        },
        {
          title: "Collection of React Hooks",
          path: "https://nikgraf.github.io/react-hooks/"
        },
        {
          title: "dumi",
          path: "https://d.umijs.org/"
        },
        {
          title: "typescript",
          path: "https://www.typescriptlang.org/"
        },
        {
          title: "Frontend Masters",
          path: "https://frontendmasters.com"
        }
      ]
    },
    {
      title: 'My GitHub',
      path: 'https://github.com/can-dy-jack',
    }
  ],
  theme: {
    '@c-primary': '#1685a9',
  },
  styles: ["a {text-decoration:none;}"]
});
