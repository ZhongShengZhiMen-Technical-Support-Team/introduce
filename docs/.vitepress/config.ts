import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '众生之门社区开发组',
  description: '众生之门社区开发组是一个众生之门官方非营利性组织，我们皆在提高我们的社区有趣性，并且坚持为社区成员提供更优质的服务。',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '加入我们', link: '/join-us' },
      { text: '关于我们', link: '/about-us' }
    ],

    sidebar: [
      {
        text: '我们',
        items: [
          { text: '加入我们', link: '/join-us' },
          { text: '关于我们', link: '/about-us' }
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZhongShengZhiMen-Technical-Support-Team' }
    ],
    footer: {
      message: '基于 LGPL 3.0 协议开源',
      copyright: 'Copyright © 2026 众生之门社区开发组'
    },
    editLink: {
      pattern: 'https://github.com/UranusOJ/docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    // 最后更新时间
    lastUpdated: true,
    lastUpdatedText: '最后更新'
  },
  lastUpdated: true,
  cleanUrls: true
})
