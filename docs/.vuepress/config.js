module.exports = {
  // 站点配置
  base: "/",
  lang: "zh-CN",
  title: "太棒了 IDEA",
  description: "用最简单的方式讲述 [IntelliJ IDEA] 的技巧",

  open: true,
  docsDir: "docs",
  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "images/logo.png",
    navbar: [
      { text: "首页", link: "/" },
      { text: "日更", link: "/awesome/" },
      { text: "插件", link: "/plugins/" },
    ],
    sidebar: {
      "/awesome/": getGuideSidebar(),
    },
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
    ["@vuepress/plugin-palette", { preset: "sass" }],
      [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-MRGHD5LXNK',
      },
    ],
  ],
};

function getGuideSidebar() {
  return [
    {
      text: "🌈",
      children: [
        { text: "概览", link: "/awesome/" },
        { link: "/awesome/pre-idea", text: "IntelliJ IDEA 历史" },
        { link: "/awesome/no-crack-idea", text: "拒绝破解" },
        { link: "/awesome/install-idea", text: "安装软件" },
        { link: "/awesome/first-java-idea", text: "创建一个 Java 项目" },
        {
          text: "知乎提问：IntelliJ IDEA 有哪些优势？",
          link: "/awesome/zhihu-29076145",
        },
        { link: "/awesome/rebase-idea", text: "Git Rebase" },

        { link: "/awesome/edit-tab-idea", text: "Tab 设置" },
        { link: "/awesome/vim-mac-idea", text: "Vim 配置输入法自动转换" },
        { link: "/awesome/kerboard", text: "对比快捷键" },
        { link: "/awesome/auto-import-idea", text: "自动导入依赖" },
        { link: "/awesome/add-push-git-idea", text: "Git Add & Push" },
        { link: "/awesome/log-git-idea", text: "Git Log" },
        { link: "/awesome/background-setting-idea", text: "设置编辑器背景" },
        {
          link: "/awesome/can't-remember-passpord-datagrid",
          text: "问题：我的 DataGrid 不能记住密码？",
        },
        { link: "/awesome/search-replace-idea", text: "搜索" },
        { link: "/awesome/show-model-idea", text: "显示模式" },
        { link: "/awesome/menu-toolbar-idea", text: "菜单和工具栏" },
        { link: "/awesome/debugger-tool-idea", text: "调试" },
        { link: "/awesome/breakpointer-debugger", text: "调试 断点" },
        { link: "/awesome/merge-idea", text: "Git Merge" },
        { link: "/awesome/interface-idea", text: "设置界面" },
        { link: "/awesome/menus-and-tools", text: "Setting/MenuAndTools" },
        { link: "/awesome/git-flow-idea", text: "Git Flow" },
        { link: "/awesome/Setting-Appearances", text: "Setting-Appearances" },
        { link: "/awesome/light-edit-idea", text: "轻量级命令行" },
        { link: "/awesome/quick-list", text: "quick-list" },
        { link: "/awesome/multiple-point-idea", text: "神级多光标" },
        {
          link: "/awesome/step-to-step-breakpointer-debugger-idea",
          text: "Debugger Step",
        },
        { link: "/awesome/plugins", text: "Vim 入门" },
        { link: "/awesome/vim-idea", text: "Vim 高级" },
        { link: "/awesome/window-debugger-idea", text: "Debugger Windows" },
        { link: "/awesome/color-font-config-idea", text: "字体配置" },
        { link: "/awesome/theme-idea", text: "主题配置" },
        { link: "/awesome/edit-nav-idea", text: "快捷键" },
        { link: "/awesome/commit-git-idea", text: "Git Commit" },
        {
          link: "/awesome/git-git-idea",
          text: "妈妈再也不用担心我不会用 Git 了",
        },
        { link: "/awesome/update-theme-idea", text: "Theme modify" },
        { link: "/awesome/branch-git-idea", text: "Git Branch" },
        { link: "/awesome/git-idea", text: "git-idea" },
        {
          link: "/awesome/config-interface-idea",
          text: "config-interface-idea",
        },
        {
          link: "/awesome/windows-mac-keyboard-compare-idea",
          text: "快捷键对比",
        },
        { link: "/awesome/multiple-pointer-idea-v1", text: "多光标配置" },
      ],
    },
  ];
}
