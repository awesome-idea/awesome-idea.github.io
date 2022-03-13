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
    sidebar: {
      "/": getGuideSidebar(),
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
  ],
};

function getGuideSidebar() {
  return [
    {
      text: "🌈",
      children: [
        { text: "概览", link: "/" },
        { link: "/pre-idea", text: "IntelliJ IDEA 历史" },
        { link: "/no-crack-idea", text: "拒绝破解" },
        { link: "/install-idea", text: "安装软件" },
        { link: "/first-java-idea", text: "创建一个 Java 项目" },
        {
          text: "知乎提问：IntelliJ IDEA 有哪些优势？",
          link: "/zhihu-29076145",
        },
        { link: "/rebase-idea", text: "Git Rebase" },

        { link: "/edit-tab-idea", text: "Tab 设置" },
        { link: "/vim-mac-idea", text: "Vim 配置输入法自动转换" },
        { link: "/kerboard", text: "对比快捷键" },
        { link: "/auto-import-idea", text: "自动导入依赖" },
        { link: "/add-push-git-idea", text: "Git Add & Push" },
        { link: "/log-git-idea", text: "Git Log" },
        { link: "/background-setting-idea", text: "设置编辑器背景" },
        {
          link: "/can't-remember-passpord-datagrid",
          text: "问题：我的 DataGrid 不能记住密码？",
        },
        { link: "/search-replace-idea", text: "搜索" },
        { link: "/show-model-idea", text: "显示模式" },
        { link: "/menu-toolbar-idea", text: "菜单和工具栏" },
        { link: "/debugger-tool-idea", text: "调试" },
        { link: "/breakpointer-debugger", text: "调试 断点" },
        { link: "/merge-idea", text: "Git Merge" },
        { link: "/interface-idea", text: "设置界面" },
        { link: "/menus-and-tools", text: "Setting/MenuAndTools" },
        { link: "/git-flow-idea", text: "Git Flow" },
        { link: "/Setting-Appearances", text: "Setting-Appearances" },
        { link: "/light-edit-idea", text: "轻量级命令行" },
        { link: "/quick-list", text: "quick-list" },
        { link: "/multiple-point-idea", text: "神级多光标" },
        {
          link: "/step-to-step-breakpointer-debugger-idea",
          text: "Debugger Step",
        },
        { link: "/plugins", text: "Vim 入门" },
        { link: "/vim-idea", text: "Vim 高级" },
        { link: "/window-debugger-idea", text: "Debugger Windows" },
        { link: "/color-font-config-idea", text: "字体配置" },
        { link: "/theme-idea", text: "主题配置" },
        { link: "/edit-nav-idea", text: "快捷键" },
        { link: "/commit-git-idea", text: "Git Commit" },
        { link: "/git-git-idea", text: "妈妈再也不用担心我不会用 Git 了" },
        { link: "/update-theme-idea", text: "Theme modify" },
        { link: "/branch-git-idea", text: "Git Branch" },
        { link: "/git-idea", text: "git-idea" },
        { link: "/config-interface-idea", text: "config-interface-idea" },
        {
          link: "/windows-mac-keyboard-compare-idea",
          text: "快捷键对比",
        },
        { link: "/multiple-pointer-idea-v1", text: "多光标配置" },
      ],
    },
  ];
}
