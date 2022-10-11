import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'chook',
  favicon: 'https://avatars.githubusercontent.com/u/62332701?s=40&v=4',
  logo: 'https://avatars.githubusercontent.com/u/62332701?s=40&v=4',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config

  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'My GitHub',
      path: 'https://github.com/can-dy-jack',
    }
  ],
});
