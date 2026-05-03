import { defineConfigWithTheme } from 'vitepress'
export default {
  lang: 'zh-CN',
  title: '众生之门社区开发组',
  description: '众生之门社区官方非营利社区组织，致力于创造更有趣的社区体验，为成员提供优质服务。',
  sidebar: [
    {
      text: '导航',
      items: [
        { text: '关于我们', link: '/about-us' },
        { text: '加入我们', link: '/join-us' },
      ]
    }
  ]
}
