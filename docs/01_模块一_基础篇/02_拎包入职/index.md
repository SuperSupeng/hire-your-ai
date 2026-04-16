## 2. 拎包入职：让你的第一个数字同事坐在工位上
上一章我们说了，数字同事有四个器官：**大脑、记忆、手脚、闹钟**。这一章，我们先把最基础的两样搞定——**给它接上大脑，给它一张办公桌**。别被那些技术名词吓退，接下来的操作就像给新同事办入职手续一样简单。

> ⏳ **写在前面**：这一章是整个教程里**唯一需要你折腾安装和配置的章节**。我们要一口气把所有工具都装好、接好、调通。扛过这一关，后面的每一章你都不需要再碰任何安装界面 —— 全程沉浸在"造同事、调教、验收"的创作快感里。
> 整个过程分 6 步，我建议你留出 **30 分钟**的整块时间，跟着一步步来。如果你运气好、手速快，可能 15 分钟就搞定了；但不用急，慢慢来，一次配好比反复折腾舒服得多。
---

### 2.1 第一步：[去云端领一把"大脑钥匙"（API Key）](https%3A%2F%2Fagivilla.feishu.cn%2Fwiki%2FEmyWwALbliDSAjk6wrccmDohnqg%3FfromScene%3DspaceOverview)
数字同事的"身体"装在你的电脑里，但它的"大脑"非常庞大，必须放在云端的超级服务器上。我们需要一根加密的电话线把它们连起来，这根线的密码就叫 **API Key**。

**具体操作：**
- <mention-doc token="PBvDw4WsZiSql1kV019cI7dunBW" type="wiki">Datawhale 算力平台使用教程</mention-doc>
<callout emoji="dizzy" background-color="light-orange" border-color="light-orange">
**记得保存好你的 API Key 与 对应调用的 Base URL，后续我们会用到。**
</callout>

---

### 2.2 第二步：[搭建"前台办公区"](https%3A%2F%2Fagivilla.feishu.cn%2Fwiki%2FAf9jwEsT4iKWpNkKBvDcNTdznth%3FfromScene%3DspaceOverview)
钥匙拿到了，现在要给数字同事一张"办公桌"。目前最主流的两个开源 AI Agent 平台是 **OpenClaw** 和 **Hermes Agent**，都能接入各种聊天软件（飞书、微信、Telegram、Discord 等），让数字同事变成你随时可以 @ 的"同事"。

**这两个平台简单对比一下：**

<lark-table rows="5" cols="3" header-row="true" column-widths="99,356,426">

  <lark-tr>
    <lark-td>
    </lark-td>
    <lark-td>
      **OpenClaw**
    </lark-td>
    <lark-td>
      **Hermes Agent**
    </lark-td>
  </lark-tr>
  <lark-tr>
    <lark-td>
      **一句话介绍**
    </lark-td>
    <lark-td>
      2026 年 GitHub 最火开源项目之一，国内社区活跃，飞书/微信适配成熟
    </lark-td>
    <lark-td>
      Nous Research 出品，两个月 GitHub 4.7 万星，主打"越用越聪明"
    </lark-td>
  </lark-tr>
  <lark-tr>
    <lark-td>
      **核心亮点**
    </lark-td>
    <lark-td>
      上手简单，中文生态好，飞书接入开箱即用
    </lark-td>
    <lark-td>
      持久记忆（跨对话记住你的偏好）、技能自进化（解决过的问题自动变成可复用技能）
    </lark-td>
  </lark-tr>
  <lark-tr>
    <lark-td>
      **消息平台**
    </lark-td>
    <lark-td>
      飞书、企业微信、Telegram、Discord、WhatsApp 等
    </lark-td>
    <lark-td>
      飞书、Telegram、Discord、Slack、WhatsApp、Signal + 命令行
    </lark-td>
  </lark-tr>
  <lark-tr>
    <lark-td>
      **安装方式**
    </lark-td>
    <lark-td>
      下载安装包，可支持图形界面操作
    </lark-td>
    <lark-td>
      一行命令自动安装，终端操作为主
    </lark-td>
  </lark-tr>
</lark-table>

**本教程统一以 **<text bgcolor="light-yellow">**OpenClaw**</text>** 为例演示**——因为它目前普及度好。但两个平台的技能文件格式是通用的，你在本教程里学到的所有"写技能"的方法，换到 Hermes Agent 上一样能用。

**具体操作：**
- <mention-doc token="VJcKwsOpRiBsbTkBNuuc4Bibne8" type="wiki">2.1 Openclaw 安装教程</mention-doc>
- <mention-doc token="FpunwVcH2iHh9hkEtF1ch1bZnif" type="wiki">2.2 Hermes 安装教程</mention-doc>
<callout emoji="dizzy" background-color="light-orange" border-color="light-orange">
**恭喜你已经把数字同事的基座搭建起来了，先别急我们继续完善好数字同事们需要的工具～**
</callout>

---

### 2.3 第三步：[搭建"后台管理室"](https%3A%2F%2Fagivilla.feishu.cn%2Fwiki%2FVkJvwvSdyiJg72kOBwAcs3mcnLe%3FfromScene%3DspaceOverview)
你刚才装好的 OpenClaw，是一个**"前台办公区" **—— 你在这里跟数字同事聊天、给它派任务、看它干活。
**但问题来了：**数字同事的"性格设定"和"技能说明书"，本质上是存在你电脑里的一个个文本文件。如果你想修改同事的性格、增加新技能，你需要一个好用的工具来编辑这些文件，这里面可以用到如下工具（选择一个即可）：

<lark-table rows="1" cols="4" column-widths="100,114,100,100">

  <lark-tr>
    <lark-td>
      Cursor
    </lark-td>
    <lark-td>
      Claude Code
    </lark-td>
    <lark-td>
      QOder
    </lark-td>
    <lark-td>
      Trae
    </lark-td>
  </lark-tr>
</lark-table>

为什么需要上述的工具呢，因为他们都有一个共同的特点，都可以通过 AI 来编辑文件，所以面对各种配置文件，使用这些工具后都不需要你一点一点写内容了，在这些工具里面和 AI 对话后就可以实现文件的编辑。
但其实这些工具当大家第一次打开它的时候，内心一定是抗拒的 —— 黑乎乎的界面，密密麻麻的菜单，一股"程序员专属"的气息扑面而来。但用了两天就会发现：**它其实是数字同事的"后台 HR 系统"，而且自带一个帮你干活的 AI，其实使用起来非常简便，本教程统一以 **<text bgcolor="light-yellow">**Cursor**</text>** 为例演示。**

**具体操作：**
- <mention-doc token="MNajw79WdiTcYNkZtR0c15XWnBe" type="wiki">Cursor 安装教程</mention-doc>
<callout emoji="dizzy" background-color="light-orange" border-color="light-orange">
**我们又有了一个管理配置数字同事的工具，接下来让我们把前后台连接起来！**
</callout>

---

### 2.4 第四步：把前后台连接起来
你现在有了前台（OpenClaw）和后台工具（比如 Cursor），但它们之间还没有接通 —— Cursor 还不知道去哪里找 OpenClaw 的工作区文件。这一步就是让 Cursor "看到" OpenClaw 的文件夹，这样你才能用它来编辑技能文件、修改员工设定。     

**具体操作：**
- <mention-doc token="D1xRwhxEPiI2xvkaRIscQzQTnUb" type="wiki">Cursor 链接远程服务器</mention-doc>

**连上之后你会看到什么**
```plaintext
  .openclaw/
  ├── workspace/       ← 🧑‍💼 员工档案（每个员工的身份设定）
  ├── skills/          ← 🧰 技能库（每个技能的说明书）
  └── openclaw.json    ← ⚙️ OpenClaw 的系统配置         
```

<callout emoji="dizzy" background-color="light-orange" border-color="light-orange">
**还有一些其他的文件夹，但是你现在不需要理解每个文件夹里有什么 —— 后面的章节会一个个带你认识。现在你只需要知道：前台和后台已经接通了。 Cursor 窗口保持打开，放在屏幕一边，马上要用到它。**
</callout>

---

### 2.5 第五步：把数字同事拉进飞书中
这是 OpenClaw 最爽的地方 —— 数字同事不只是活在一个软件里，它能直接进入你日常的飞书聊天框，成为你随时可以 @ 的"同事"。要实现这一点，我们需要在飞书开放平台创建一个"机器人应用"，然后把它和 OpenClaw 连起来。听起来有点唬人，但实际上就是填几个表格的事。

**具体操作：**
- <mention-doc token="OMaWwnpwfi8DAxkCJ1dc4lKgntc" type="wiki">飞书机器人配置</mention-doc>
<callout emoji="dizzy" background-color="light-orange" border-color="light-orange">
**恭喜你拥有了自己的第一个数字同事。**
</callout>

---

#### 前台 vs 后台：什么时候用飞书，什么时候用 Cursor？
前面装好 OpenClaw、又装好了 Cursor，你心里大概有一个疑问：我们不是把同事拉进飞书了，到时候我直接在飞书里跟它说「帮我查一下 XX」不就行了吗？**为什么还要打开 Cursor 去编辑什么文件？多此一举吧？**

好问题。答案是：**你当然可以在飞书里完成许多对话——但你很快会把「派任务」和「改设定」搅成一团。**想象一下这个场景：你在飞书里 @ 数字同事
> "以后每周一早上 9 点，自动帮我搜一下字节高管的动态，整理成表格发到这个群里。对了，搜索的时候关键词要加上'创业'和'离职'，表格要有可信度那一列。哦对了，语气不要太生硬，用'老板'称呼我。"

这段话里，**哪些是你在"给任务"，哪些是你在"改设定"？** 你自己可能都分不清。而且下次你想微调搜索范围或者输出格式，你得在飞书聊天记录里翻半天："我上次是怎么跟它说的来着？"
**这就是为什么我们需要把两件事分开：**

<lark-table rows="5" cols="3" header-row="true" column-widths="109,277,285">

  <lark-tr>
    <lark-td>
    </lark-td>
    <lark-td>
      前台（飞书）
    </lark-td>
    <lark-td>
      后台（Cursor）
    </lark-td>
  </lark-tr>
  <lark-tr>
    <lark-td>
      **干什么**
    </lark-td>
    <lark-td>
      日常工作：派任务、看结果、跟它对话
    </lark-td>
    <lark-td>
      配置管理：改人设、加技能、调参数
    </lark-td>
  </lark-tr>
  <lark-tr>
    <lark-td>
      **打个比方**
    </lark-td>
    <lark-td>
      你在办公室跟同事说话
    </lark-td>
    <lark-td>
      你在 HR 系统里改他的岗位职责和 KPI
    </lark-td>
  </lark-tr>
  <lark-tr>
    <lark-td>
      **说话方式**
    </lark-td>
    <lark-td>
      "帮我查一下 XX""执行【XX】技能"
    </lark-td>
    <lark-td>
      编辑技能文件里的执行步骤和输出格式
    </lark-td>
  </lark-tr>
  <lark-tr>
    <lark-td>
      **改动影响**
    </lark-td>
    <lark-td>
      这一次的任务结果
    </lark-td>
    <lark-td>
      以后每一次的执行方式
    </lark-td>
  </lark-tr>
</lark-table>

**前台管"做什么"，后台管"怎么做"。**
这个分区一旦建立，你的思路就会非常清晰：
- 想**让它干活** → 去飞书 @ 它
- 想**改变它干活的方式** → 去 Cursor 改文件
- 想**给它加一项新能力** → 去 Cursor 创建新的技能文件
> 📌 **一句话总结**：Cursor 就是你管理数字同事的**HR 后台**。你在这里定义同事的能力和规矩，然后在飞书里当老板发号施令。各司其职，才不会乱。
> <text color="red">**还有一个更为核心的问题是，如果你的 OpenClaw 出问题了，你很难从飞书上判断，是因为网络有问题，还是模型有问题，还是什么原因，此时通过后台来对他们进行排查管理是最为方便的，以免你遇到问题不知道该从哪里入手。**</text>
搞清这层关系，你会清楚自己该在什么界面、做什么事。
---

### 2.6 第六步：发放"新手大礼包"（见证前后台联动）
现在同事坐在工位上了，但它还是个没有性格、没有经验的"白纸"。
如果这是一个真人新同事，你会怎么做？——给他一份入职手册、一叠 SOP 流程文档，让他先照着干，边干边学。数字同事也一样。
我们为你准备了一份**职场新手大礼包**，里面包含 **1 个人设灵魂 + 10 个高频职场技能**，覆盖了打工人从周一到周五最常碰到的工作场景 —— 写周报、整理会议纪要、发社交媒体、回邮件、做 PPT、盯竞品……导入之后，你的数字同事**立刻就能上手干活**。
> 💡 **这也是数字同事和"裸"的 ChatGPT 最大的区别**：ChatGPT 什么都得你从头教，而你的数字同事自带"岗前培训"，开箱即战——而且它能调用外部工具真正"动手干活"，不只是跟你聊天。

👉 **[点击下载：新手大礼包.zip]** `[此处替换：大礼包下载链接，建议放飞书云文档附件]`

#### 🎁 大礼包里有什么？
**人设灵魂 × 1**

<lark-table rows="2" cols="2" header-row="true" column-widths="147,616">

  <lark-tr>
    <lark-td>
      文件
    </lark-td>
    <lark-td>
      效果
    </lark-td>
  </lark-tr>
  <lark-tr>
    <lark-td>
      `首席打杂官.md`
    </lark-td>
    <lark-td>
      导入后，它不再是冷冰冰的"AI 助手"，而是一个有温度、有性格的贴心同事。它会叫你"老板"，语气专业但不死板，汇报工作时条理清晰，偶尔还会卖个萌
    </lark-td>
  </lark-tr>
</lark-table>

**职场技能 × 10**

<lark-table rows="11" cols="5" header-row="true" column-widths="55,146,197,154,268">

  <lark-tr>
    <lark-td>
    </lark-td>
    <lark-td>
      技能名称
    </lark-td>
    <lark-td>
      解决什么痛点
    </lark-td>
    <lark-td>
      你要做的事
    </lark-td>
    <lark-td>
      它帮你做的事
    </lark-td>
  </lark-tr>
  <lark-tr>
    <lark-td>
      1
    </lark-td>
    <lark-td>
      📊 **无情周报生成器**
    </lark-td>
    <lark-td>
      每周五下午 5 点抓耳挠腮写周报
    </lark-td>
    <lark-td>
      输入几句流水账
    </lark-td>
    <lark-td>
      自动扩写成结构清晰、重点突出、老板爱看的高管周报
    </lark-td>
  </lark-tr>
  <lark-tr>
    <lark-td>
      2
    </lark-td>
    <lark-td>
      🎙️ **会议纪要整理官**
    </lark-td>
    <lark-td>
      开完会，笔记乱七八糟，或者干脆没记
    </lark-td>
    <lark-td>
      把会议记录丢进去，或者直接说"帮我整理刚才那个会"
    </lark-td>
    <lark-td>
      自动梳理出「讨论要点 + 决策结论 + 待办事项表格」。配置了飞书 CLI 后，它还能**自己去飞书妙记拉取会议录音转写**，你连复制粘贴都不用
    </lark-td>
  </lark-tr>
  <lark-tr>
    <lark-td>
      3
    </lark-td>
    <lark-td>
      💌 **邮件小作文大师**
    </lark-td>
    <lark-td>
      给客户/领导写邮件，措辞纠结半天
    </lark-td>
    <lark-td>
      用大白话说清楚"我想表达什么"
    </lark-td>
    <lark-td>
      自动生成措辞得体、语气恰当的商务邮件，可选"正式/友好/强硬"三种风格
    </lark-td>
  </lark-tr>
  <lark-tr>
    <lark-td>
      4
    </lark-td>
    <lark-td>
      📅 **今日日程管家**
    </lark-td>
    <lark-td>
      每天早上打开日历才发现一堆会，来不及准备
    </lark-td>
    <lark-td>
      什么都不用做，它每天早上自动找你
    </lark-td>
    <lark-td>
      自动读取今日飞书日历，列出所有会议的时间、参会人、议题，并提醒"这个会你可能需要提前准备 XX"。背靠背会议还会特别标注 ⚠️
    </lark-td>
  </lark-tr>
  <lark-tr>
    <lark-td>
      5
    </lark-td>
    <lark-td>
      📝 **爆款文案写手**
    </lark-td>
    <lark-td>
      老板说"帮我发个小红书"，你憋了一小时
    </lark-td>
    <lark-td>
      丢一个链接或一段文字
    </lark-td>
    <lark-td>
      自动提取核心观点，生成带 Emoji 的小红书风格推文，配好话题标签
    </lark-td>
  </lark-tr>
  <lark-tr>
    <lark-td>
      6
    </lark-td>
    <lark-td>
      ✍️ **公众号写手**
    </lark-td>
    <lark-td>
      写一篇公众号文章要半天
    </lark-td>
    <lark-td>
      给一个选题方向或参考素材
    </lark-td>
    <lark-td>
      从选题分析→大纲→正文→排版，全流程输出一篇可直接发布的公众号长文
    </lark-td>
  </lark-tr>
  <lark-tr>
    <lark-td>
      7
    </lark-td>
    <lark-td>
      🔍 **竞品情报雷达**
    </lark-td>
    <lark-td>
      老板问"竞对最近在干嘛"，你一脸懵
    </lark-td>
    <lark-td>
      输入一个公司名
    </lark-td>
    <lark-td>
      自动联网搜索最近一周的动态，整理成「产品动作 + 融资消息 + 人事变动 + 舆情」的情报简报
    </lark-td>
  </lark-tr>
  <lark-tr>
    <lark-td>
      8
    </lark-td>
    <lark-td>
      🎯 **PPT 一条龙**
    </lark-td>
    <lark-td>
      做 PPT 从大纲到排版全靠自己
    </lark-td>
    <lark-td>
      说清楚"给谁讲、讲什么、想达到什么效果"
    </lark-td>
    <lark-td>
      先生成完整大纲（每页标题+要点+视觉建议），确认后直接输出可编辑的 PPT 文件（.pptx）
    </lark-td>
  </lark-tr>
  <lark-tr>
    <lark-td>
      9
    </lark-td>
    <lark-td>
      👥 **人脉管家**
    </lark-td>
    <lark-td>
      名片收了一堆，联系人信息散落各处
    </lark-td>
    <lark-td>
      随手说"今天跟张总聊了 XX"
    </lark-td>
    <lark-td>
      自动归档到联系人档案，记录每次互动，到期提醒你该回访维护关系了
    </lark-td>
  </lark-tr>
  <lark-tr>
    <lark-td>
      10
    </lark-td>
    <lark-td>
      🎨 **海报设计师**
    </lark-td>
    <lark-td>
      做活动海报/证书/Banner，得找设计师排期
    </lark-td>
    <lark-td>
      说清楚活动信息和风格偏好
    </lark-td>
    <lark-td>
      自动生成活动海报、荣誉证书、社交媒体 Banner 等设计图
    </lark-td>
  </lark-tr>
</lark-table>

> 💡 **部分技能首次使用需要一次性配置**：比如"今日日程管家"和"会议纪要"的飞书妙记功能需要配置飞书 CLI（一行命令安装+扫码授权）；"PPT 一条龙"的文件生成需要接入 PPT 生成服务；"海报设计师"需要接入 AI 绘图工具。每个技能文件开头都有详细的配置指南，大部分 5 分钟搞定。具体步骤见附录 B。
> **没配也不影响使用**——比如"会议纪要整理官"没配飞书 CLI 时，你手动粘贴会议记录照样能用；配了之后它能自己去拉取，更省事而已。
> 🔧 **关于飞书 CLI**：大礼包内置了一个叫 lark-cli 的工具，相当于给数字同事发了一张**飞书工牌**。配好之后，它能直接读写你飞书里的文档、妙记、日历、消息、多维表格、任务——像真正的同事一样在飞书里自主获取信息。目前"会议纪要"和"日程管家"两个技能用到了它，后续章节会解锁更多玩法。
#### 如何导入
1. **下载并解压**：把下载的 `新手大礼包.zip` 解压到电脑上任意位置。解压后你会看到这样的文件结构：
```plaintext
新手大礼包/
├── agents/
│   └── 首席打杂官.md          ← 人设灵魂
└── skills/
    ├── weekly_report.md       ← ① 无情周报生成器
    ├── meeting_notes.md       ← ② 会议纪要整理官
    ├── email_writer.md        ← ③ 邮件小作文大师
    ├── feishu_calendar.md     ← ④ 今日日程管家
    ├── copywriter.md          ← ⑤ 爆款文案写手
    ├── wechat_writer.md       ← ⑥ 公众号写手
    ├── competitor_radar.md    ← ⑦ 竞品情报雷达
    ├── ppt_magic.md           ← ⑧ PPT 一条龙
    ├── contact_crm.md         ← ⑨ 人脉管家
    └── poster_designer.md     ← ⑩ 海报设计师

```

1. **把文件放进工作区**：还记得刚才打开的 Cursor（后台）窗口吗？现在切到 Cursor，你会看到左侧有 `agents/` 和 `skills/` 文件夹。把解压出来的文件，**按对应的文件夹拖进去**：
  - `首席打杂官.md` → 拖进 Cursor 左侧的 `agents/` 文件夹
  - `skills/` 里的所有 `.md` 文件 → 拖进 Cursor 左侧的 `skills/` 文件夹
> 🖼️ *[截图占位：从文件管理器拖拽技能文件到 Cursor 侧边栏 skills 文件夹的操作示意]*
1. **就这样，搞定了。** 没有任何"导入"按钮要点——你只是把几个文件丢进了一个文件夹而已。OpenClaw 会自动扫描工作区里的文件变化，新技能立刻生效。
> 💡 **感受到了吗？** 这就是"后台管文件"的威力：你在 Cursor 里往文件夹扔一个文件 = 给数字同事教了一项新技能。删掉一个文件 = 收回了一项技能。就是这么直接。
#### ✨ 验证一下：去飞书里跟它说句话！
技能文件已经放好了，现在让我们验证它是否真的学会了。
**打开飞书**（或者 OpenClaw 的聊天窗口），@你的数字同事，随便说一句：
> 你好，你都会什么技能？
如果一切正常，它会用"首席打杂官"的语气回复你，并列出它现在掌握的所有技能。你应该能看到"爆款文案写手""无情周报生成器"等技能名称。
> 🖼️ *[截图占位：飞书中 @ 机器人询问技能，机器人回复技能列表的对话截图]*
**这就是你以后跟数字同事的日常互动方式——直接在飞书里 @ 它，用大白话说你想做什么。** 不需要打开任何其他软件。
#### 📄 导入好了，来看一眼：一个技能大概长什么样？
文件已经在你的 `skills/` 里了，飞书里也验过它能列技能——趁热花**三十秒**建个心理图像：**不用背**，下面马上会打开真文件带你对照。
不用懂代码。每一个技能，本质上就是 `skills/` 里的一个 **Markdown 文件**——系统读「名片」，模型读「怎么干」。
- **顶上一小段（YAML，夹在 --- 之间）**：给 OpenClaw 看的「名片」——`name` / `description` / 需要哪些 `tools`（例如联网、飞书 CLI；不需要就写空数组 `[]`）。
- **下面正文（普通 Markdown）**：给大模型看的「SOP」——通常包括 **任务目标、执行步骤、输出格式**（有的技能还会加「写作要求」「注意事项」等）。
以大礼包里的 **「无情周报生成器」**（`weekly_report.md`）为例，下面是**极度缩写的骨架**——真文件会比这长、比这细，但结构一致：
```markdown
---
name: weekly_report
description: 无情周报生成器——流水账秒变高管周报
tools: []
---

# 无情周报生成器

## 任务目标
把用户给的本周流水账，整理成一份像样、可交差的周报。

## 执行步骤
1. 读输入，抓重点成果与风险
2. 按固定结构扩写、润色

## 输出格式
本周总结 / 问题与支持 / 下周计划 ……

```

先混个**眼熟**就行：技能不是黑盒，就是侧边栏里能点开、能保存的文本。紧接着 **「掀开引擎盖」**，我们会打开另一份技能（例如 `copywriter.md`）的**完整原文**，再让你改一行字，感受「改文件 = 改行为」。到了下一模块 **《破冰实战》**，你就用**同一套骨架**从零造一个新技能。
#### 🔍 掀开引擎盖：这些技能文件到底长什么样？
骨架看过了，把镜头拉近：你拖进去的那些 `.md` 里，**具体**写了什么，凭什么它就学会了这个技能？
现在切回 Cursor 窗口，在左侧 `skills/` 文件夹里，点开其中一个，比如 `copywriter.md`（爆款文案写手），你会看到这样的内容：
```markdown
---
name: copywriter
description: 爆款文案写手——链接或文字转小红书推文
tools:
  - web_search
---

# 爆款文案写手

## 任务目标
读取用户提供的文章链接或文字内容，提取核心观点，
改写成小红书风格的种草推文。

## 执行步骤
1. 判断用户输入的是链接还是文字：
   - 如果是链接：使用联网工具读取文章全文
   - 如果是文字：直接作为素材使用
2. 提取内容中最有传播力的 3 个核心观点
3. 改写成带 Emoji、口语化、适合手机阅读的小红书推文
4. 字数控制在 300 字以内

## 输出格式
- 标题：带 Emoji 的吸睛标题（不超过 20 字）
- 正文：每个观点一段，口语化表达，穿插 Emoji
- 结尾：带 3~5 个话题标签 #

```

**看到了吗？所谓的"技能"，本质上就是一个结构清晰的文本文件。** 顶部 `---` 之间是配置信息（名字、描述、需要什么工具），下面就是用大白话写的工作说明书。
再点开 `meeting_notes.md`（会议纪要整理官）看看，你会发现结构一模一样——只是"任务目标"和"执行步骤"换了内容。**所有技能都是这个套路。**
**这就是数字同事的真相：前台的每一个按钮背后，本质上都是这些文本文件。** 只要你在 Cursor 里把文件写好存好，OpenClaw 就会自动识别出一个新技能。
#### 🔧 动手体验：亲手改一行试试！
光看不练没有体感。现在我们来做一个 **30 秒的小实验**，让你亲身感受"改文件 = 改技能"的威力：
1. 在 Cursor 里，确保你已经打开了 `copywriter.md` 这个文件。
1. 找到执行步骤第 4 条里写的 `字数控制在 300 字以内`。
1. 把 `300` 改成 `500`。
1. 按 `Ctrl + S`（Mac 是 `Cmd + S`）保存文件。
1. 切回 OpenClaw，点开"爆款文案写手"这个技能的详情看看——**它已经自动更新了！**
**就是这么简单。** 你刚才用 5 秒钟修改了一行文字，就改变了数字同事的行为。你还可以试试更大胆的改动——比如把"小红书推文"改成"微信朋友圈文案"，保存后再跑一次，你会发现输出风格完全变了。
以后，我们甚至不需要自己从零写——直接让 Cursor 里的 AI 生成或修改这些文件，从而把想法落成「能跑的技能」。
> 📌 **划重点**：记住技能文件的标准结构——**配置头 + 任务目标 + 执行步骤 + 输出格式**。后面两章你要亲手（让 AI 帮你）写出这样的文件。现在先混个眼熟，有个印象就行。
#### ✍️ 记事本也能写，为什么更推荐用 Cursor？
从原理上讲，**任何纯文本编辑器**都能写技能——它不过是一个 `.md` 文件。实操里我们更推荐在 **Cursor** 里完成新建和修改：
- 技能有**固定骨架**（YAML 头里的字段、`tools` 名字、缩进），写错一处，轻则识别异常，重则整份不生效；
- 工作区里已有「大礼包」范本，**对齐现有格式**比自己从零默写更省事、更不容易踩坑。
**Cursor = 编辑器 + 内置 AI**：你用大白话讲清「我要一个什么样的技能」，它帮你**落成**结构正确的文件——有点像跟熟手 HR 口述岗位需求，对方帮你写成正式 JD。**下一模块《破冰实战》**会只走这一条路：**教你用 Cursor 把需求配置进去**，而不是手抄 YAML。
---

### 2.7 第七步：派发第一个任务（体验当老板的爽感）
万事俱备！现在让我们正式体验一下"指挥数字同事干活"的感觉。我们要做的这个任务，是**普通 ChatGPT / 豆包根本做不到的**——因为它需要同事自己联网去读取一篇文章，然后加工处理。
如果你已经完成了 2.4 的飞书接入，打开你的飞书机器人，`给你的数字同事`，发送以下指令：
> 调用【爆款文案写手】技能。请读取这篇文章的链接：`[此处替换：一篇公众号或网页文章链接]`，提取里面的核心观点，帮我改写成一篇带 Emoji 的小红书种草文。
如果链接读取失败（有些网站有反爬限制），你可以直接把一段文字丢给它：
> 调用【爆款文案写手】技能。请把以下内容改写成一篇带 Emoji 的小红书种草文：
> "最近我发现一个很有意思的趋势：越来越多的传统企业老板开始给自己配'AI 助理'。不是买一个 ChatGPT 会员那么简单，而是真的像招一个同事一样，给 AI 设定身份、分配技能、定好工作流程。有个做外贸的朋友，让 AI 每天早上自动扫描行业新闻，整理成简报发到他的微信。他说以前这事儿要让实习生干半天，现在秒出。"
**放下手机（或者就盯着屏幕看），喝口水。** 几秒钟后，一篇排版精美、网感十足的小红书文案就会出现在你面前。
> 🖼️ *[截图占位：数字同事返回的小红书文案结果，展示实际效果]*
**感受到了吗？** 你没有打开任何网页版 AI，没有复制粘贴提示词，只是在飞书里 @ 了一下"同事"，它就自己读文章、提观点、写文案，一气呵成。
**这就是"数字同事"和"聊天机器人"的根本区别**——你不再是那个每次都要手把手教它干活的人，你是那个发号施令的老板。
---

**🎉 恭喜你！** 你的第一个数字同事已经正式入职了。让我们快速回顾一下你刚才做了什么：

<lark-table rows="7" cols="3" header-row="true" column-widths="74,244,244">

  <lark-tr>
    <lark-td>
      步骤
    </lark-td>
    <lark-td>
      你做了什么
    </lark-td>
    <lark-td>
      对应的比喻
    </lark-td>
  </lark-tr>
  <lark-tr>
    <lark-td>
      2.1
    </lark-td>
    <lark-td>
      在智谱平台注册并拿到 API Key
    </lark-td>
    <lark-td>
      领了一把"大脑钥匙"
    </lark-td>
  </lark-tr>
  <lark-tr>
    <lark-td>
      2.2
    </lark-td>
    <lark-td>
      安装 OpenClaw 并接入 API Key
    </lark-td>
    <lark-td>
      给同事搭了"前台办公区"
    </lark-td>
  </lark-tr>
  <lark-tr>
    <lark-td>
      2.3
    </lark-td>
    <lark-td>
      安装 Cursor 并打开工作区
    </lark-td>
    <lark-td>
      给你搭了"后台 HR 系统"
    </lark-td>
  </lark-tr>
  <lark-tr>
    <lark-td>
      2.4
    </lark-td>
    <lark-td>
      在飞书里创建并接入机器人
    </lark-td>
    <lark-td>
      把同事拉进了公司群聊
    </lark-td>
  </lark-tr>
  <lark-tr>
    <lark-td>
      2.5
    </lark-td>
    <lark-td>
      导入新手大礼包，亲手改了一行文件
    </lark-td>
    <lark-td>
      发了"入职礼包"，还掀开引擎盖看了看
    </lark-td>
  </lark-tr>
  <lark-tr>
    <lark-td>
      2.6
    </lark-td>
    <lark-td>
      在飞书/OpenClaw 里发出第一个指令
    </lark-td>
    <lark-td>
      当了一回老板，体验了指挥的爽感
    </lark-td>
  </lark-tr>
</lark-table>

更重要的是——你已经亲眼看到了技能文件长什么样，还亲手改过了一行。你已经知道了：**所谓的"技能"，就是一个文本文件；所谓的"造数字同事"，就是写好这些文件。**
但你心里大概已经有一个痒痒的念头了：**"大礼包里的技能是通用的，我能不能自己造一个，专门解决我工作里那个烦了很久的事？"**
当然能。下一章我们先跟着一个真实案例"抄"一遍，把流程走顺——你会发现，从"想清楚需求"到"飞书里跑起来"，总共也就六七分钟的事。
