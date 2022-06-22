const sidebar = require('./sidebar');

module.exports = {
  // 站点配置
  base: "/",
  lang: "zh-CN",
  title: "🥇Top tips",
  description: "👇",
  docsDir: "docs",
  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    navbar: [
      { text: "🛌", link: "/" },
      { text: "🗑", link: "/g/" },
    ],
    sidebar: sidebar,
  },
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "Search",
          },
        },
      },
    ],
    ["vuepress-plugin-auto-sidebar", {}]
  ],
};