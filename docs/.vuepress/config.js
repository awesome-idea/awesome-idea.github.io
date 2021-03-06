const sidebar = require('./sidebar')

module.exports = {
  // ç«ç¹éç½®
  base: '/',
  lang: 'zh-CN',
  title: 'ð¥Top tips',
  description: 'ð',
  head: [['link', { rel: 'shortcut icon', href: '/images/favicon.icon' }]],
  docsDir: 'docs',
  // ä¸»é¢åå®çéç½®
  theme: '@vuepress/theme-default',
  themeConfig: {
    navbar: [
      { text: 'ð', link: '/' },
      { text: 'ð', link: '/g/' },
      { text: 'ð', link: '/idea/' },
    ],
    sidebar: sidebar,
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
        },
      },
    ],
    // ["vuepress-plugin-auto-sidebar", {}]
  ],
}
