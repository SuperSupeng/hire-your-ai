import { defineConfig } from 'vitepress'

// GitHub Pages 部署到 /hire-your-ai/ 子路径
// 本地预览 / EdgeOne 等场景可通过 BASE=/ 覆盖
const base = process.env.BASE ?? '/hire-your-ai/'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Hire Your AI · 数字同事训练营',
  description: '别再把 AI 当工具了,把它当同事。一门教普通打工人搭建自己的数字同事的训练营。',
  base,
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    math: true,
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '开始学习', link: '/00_卷首语' },
      { text: 'Starter Pack', link: 'https://github.com/SuperSupeng/hire-your-ai/tree/main/starter-pack' },
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换' },
          },
        },
      },
    },

    sidebar: [
      { text: '📖 卷首语', link: '/00_卷首语' },
      {
        text: '📦 模块一:基础篇 —— 认知重塑与拎包入职',
        link: '/01_模块一_基础篇/',
        collapsed: false,
        items: [
          { text: '1. 认知重塑', link: '/01_模块一_基础篇/01_认知重塑' },
          {
            text: '2. 拎包入职',
            link: '/01_模块一_基础篇/02_拎包入职/',
            collapsed: true,
            items: [
              { text: '2.1 API Key', link: '/01_模块一_基础篇/02_拎包入职/01_API_Key' },
              { text: '2.2 前台办公区', link: '/01_模块一_基础篇/02_拎包入职/02_前台办公区' },
              { text: '2.3 后台管理室', link: '/01_模块一_基础篇/02_拎包入职/03_后台管理室' },
              { text: '2.4 前后台连接', link: '/01_模块一_基础篇/02_拎包入职/04_前后台连接' },
              { text: '2.5 飞书机器人', link: '/01_模块一_基础篇/02_拎包入职/05_飞书机器人' },
            ],
          },
        ],
      },
      {
        text: '🎯 模块二:实战篇 —— 场景挖掘与业务流编排',
        link: '/02_模块二_实战篇/',
        collapsed: false,
        items: [
          { text: '3. 破冰实战', link: '/02_模块二_实战篇/03_破冰实战' },
          { text: '4. 场景挖掘', link: '/02_模块二_实战篇/04_场景挖掘' },
        ],
      },
      {
        text: '🧠 模块三:进阶篇 —— 灵魂注入与集团军作战',
        link: '/03_模块三_进阶篇/',
        collapsed: false,
        items: [
          { text: '5. 灵魂注入', link: '/03_模块三_进阶篇/05_灵魂注入' },
          { text: '6. 进阶架构', link: '/03_模块三_进阶篇/06_进阶架构' },
        ],
      },
      {
        text: '🚀 模块四:深水区 —— 组建小队,搭建你的数字公司',
        link: '/04_模块四_深水区/',
        collapsed: false,
        items: [
          { text: '7. 产研小队', link: '/04_模块四_深水区/07_产研小队' },
          { text: '8. 增长小队', link: '/04_模块四_深水区/08_增长小队' },
          { text: '9. 跨小队协作', link: '/04_模块四_深水区/09_跨小队协作' },
        ],
      },
      { text: '📎 附录', link: '/05_附录' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SuperSupeng/hire-your-ai' },
    ],

    editLink: {
      pattern: 'https://github.com/SuperSupeng/hire-your-ai/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '本页目录',
      level: [2, 3],
    },

    lastUpdated: {
      text: '最后更新',
    },

    footer: {
      message: '采用 <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a> 许可协议',
      copyright: 'Copyright © 2026 Darren (SuperSupeng)',
    },
  },
})
