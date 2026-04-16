<h1 align="center">Hire Your AI · 数字同事训练营</h1>

<p align="center">
  <b>别再把 AI 当工具,把它当同事</b><br>
  <i>Stop using AI. Start hiring it.</i>
</p>

<p align="center">
  <img src="docs/public/learning.GIF" alt="Let's learn" width="240">
</p>

> [!CAUTION]
> ⚠️ **Alpha 内测版**:此为早期构建版本,章节尚不完整且可能存在错误。欢迎在 [Issues](https://github.com/SuperSupeng/hire-your-ai/issues) 反馈问题或建议。

## 这是什么

这不是一门"教你写更好的 Prompt"的课,而是一门教你**搭建自己的数字同事**(AI Agent)的训练营。

如果你已经会用 ChatGPT 但总感觉"它只是个工具,你拨一下它动一下"——这正是这门课要解决的问题。**数字同事**有记忆、有手脚、有闹钟,能自己定时完成重复的工作,不再需要你每次从零开始交代背景。

## 👥 适合谁

- **被日常重复工作拖住的打工人**:周报、日报、早报、客户跟进、会议纪要……
- **对 AI 好奇但不想写代码**的非技术同学
- 想**从「1 个 AI 助理」发展到「一支 AI 小队」**的管理者、创业者

**不要求**你会编程、会运维服务器、懂大模型原理。

## 🌐 在线阅读

> 🚧 站点部署中,首次 push 后需要在仓库 Settings > Pages 里把 Source 设为 "GitHub Actions"

https://supersupeng.github.io/hire-your-ai/

## 📚 课程目录

| 章节 | 状态 |
|---|---|
| [📖 卷首语](docs/00_卷首语.md) | ✅ |
| **📦 模块一:基础篇 —— 认知重塑与拎包入职** | |
| ├ [导语](docs/01_模块一_基础篇/index.md) | ✅ |
| ├ [1. 认知重塑](docs/01_模块一_基础篇/01_认知重塑.md) | ✅ |
| └ 2. 拎包入职 | |
| &nbsp;&nbsp;&nbsp;├ [导语](docs/01_模块一_基础篇/02_拎包入职/index.md) | ✅ |
| &nbsp;&nbsp;&nbsp;├ [2.1 API Key](docs/01_模块一_基础篇/02_拎包入职/01_API_Key.md) | 📝 |
| &nbsp;&nbsp;&nbsp;├ [2.2 前台办公区](docs/01_模块一_基础篇/02_拎包入职/02_前台办公区.md) | 📝 |
| &nbsp;&nbsp;&nbsp;├ [2.3 后台管理室](docs/01_模块一_基础篇/02_拎包入职/03_后台管理室.md) | 📝 |
| &nbsp;&nbsp;&nbsp;├ [2.4 前后台连接](docs/01_模块一_基础篇/02_拎包入职/04_前后台连接.md) | 📝 |
| &nbsp;&nbsp;&nbsp;└ [2.5 飞书机器人](docs/01_模块一_基础篇/02_拎包入职/05_飞书机器人.md) | ✅ |
| **🎯 模块二:实战篇 —— 场景挖掘与业务流编排** | |
| ├ [导语](docs/02_模块二_实战篇/index.md) | ✅ |
| ├ [3. 破冰实战](docs/02_模块二_实战篇/03_破冰实战.md) | ✅ |
| └ [4. 场景挖掘](docs/02_模块二_实战篇/04_场景挖掘.md) | ✅ |
| **🧠 模块三:进阶篇 —— 灵魂注入与集团军作战** | |
| ├ [导语](docs/03_模块三_进阶篇/index.md) | ✅ |
| ├ [5. 灵魂注入](docs/03_模块三_进阶篇/05_灵魂注入.md) | ✅ |
| └ [6. 进阶架构](docs/03_模块三_进阶篇/06_进阶架构.md) | ✅ |
| **🚀 模块四:深水区 —— 组建小队,搭建你的数字公司** | |
| ├ [导语](docs/04_模块四_深水区/index.md) | ✅ |
| ├ [7. 产研小队](docs/04_模块四_深水区/07_产研小队.md) | ✅ |
| ├ [8. 增长小队](docs/04_模块四_深水区/08_增长小队.md) | ✅ |
| └ [9. 跨小队协作](docs/04_模块四_深水区/09_跨小队协作.md) | ✅ |
| [📎 附录](docs/05_附录.md) | ✅ |

> ✅ 已就绪 · 📝 骨架已填,细节打磨中 · 🚧 写作中

## 📦 仓库结构

```
hire-your-ai/
├── docs/                    课程正文(VitePress 渲染源)
├── starter-pack/            配套物料:可直接 clone 使用的 Agent / Skill 示例
│   ├── agents/
│   └── skills/
└── .github/workflows/       自动部署到 GitHub Pages
```

## 🛠 本地开发

```bash
# 安装依赖
npm install

# 启动本地预览(默认 http://localhost:5173/hire-your-ai/)
BASE=/ npm run docs:dev

# 生产构建
npm run docs:build
```

## 🤝 贡献

欢迎提 Issue 或 PR:
- 勘误、举例补充 → PR
- 新场景需求 → Issue 聊一聊再落地

## 🌟 出品社区

<p align="center">
  <a href="https://github.com/datawhalechina">
    <img src="docs/public/datawhale-logo.png" alt="Datawhale" height="64">
  </a>
</p>

<p align="center">
  本教程来自 <a href="https://github.com/datawhalechina">Datawhale AI 开源学习社区</a> —— For the learner， 和学习者一起成长。<br>
  内容发起者:<a href="https://github.com/SuperSupeng">@SuperSupeng (Darren)</a>
</p>

## 📄 License

本作品采用 [CC BY-NC-SA 4.0](http://creativecommons.org/licenses/by-nc-sa/4.0/) 协议:
- ✅ 可自由分享、改编
- ❌ 不可用于商业用途
- ⚖️ 改编版本必须使用相同协议
