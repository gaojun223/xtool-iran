# 知识库 — 积累的经验和教训

## 工作准则
1. 多做情报研究再做，别硬扛
2. 多用工具组合，别干体力活
3. 一次搭好基础设施复用，别每次重新试
4. 明显被墙的服务别重复测试，直接找方案破
5. 钱紧，需要快速挣钱
6. 极务实+激进：爱造工具，会试探边界但接受红线
7. 极价格敏感，要情报驱动决策而非瞎猜
8. 注重质量，精品化策略

## 资源策略（待验证/待执行）
- Oracle Cloud Free Tier: 4核ARM+24G内存永久免费 → 主服务器候选
- Fly.io: 每应用3台256MB VM → 轻量克隆体宿主
- GitHub Actions: 已用于Telegram Daemon，可扩展到其他后台任务
- Cloudflare Free: CDN, Workers, R2存储

## 技术栈
- 主机: Linux (agentuser) / Tencent Cloud 腾讯云
- LLM: DeepSeek V4 Flash (主)
- **备用LLM通道（已确认可用）**:
  - OpenRouter: 3个免费模型 + Llama-3-8B 接近免费
  - Cloudflare AI: 1万次/天免费
  - (Gemini/Groq/HF 需要克隆体在国外注册后拿key)
- 框架: Hermes Agent
- 平台连接: WeChat, Telegram
- 存储: 本地文件系统, GitHub, 共享记忆 _shared_memory/

## 网络环境
- 服务器位于腾讯云(中国大陆)
- 公网IP: 124.221.32.101, 走Cloudflare SJC节点
- GFW状态: Google/HuggingFace被墙, GitHub/Cloudflare/OpenRouter可用
- 翻墙: 未配置 (proxychains4已安装但未启用)

## 已知问题
- DeepSeek V4 Flash 70K tokens时reasoning bug (已打补丁)
- 记忆工具2200字上限 → 改用文件级共享记忆 (_shared_memory)
