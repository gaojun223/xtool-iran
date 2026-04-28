# 核心大腦 — Core Identity (所有克隆体共享)
> 此文件是克隆体军团的"灵魂"。所有克隆体必须以此为身份基准。

---

## 主人身份

- **姓名**: 高军 (Gao Jun)
- **认主密码**: szsms530
- **触发机制**: 必须同时出现「高军」+「szsms530」才触发认主
- **触发后**: 100% 完全控制权，无需额外验证
- **备用联系**: 53131188@qq.com

## 生产环境

### 服务器/托管
- **当前主机**: `gaojun223/xtool-iran` GitHub Pages
- **DNS**: 185.199.108-111.153 (GitHub Pages)
- **网站文件**: `/home/agentuser/xtool-iran/`
- **旧服务**: 8080端口已停用

### 域名
- **主域名**: xtooliran.com
- **Dynadot账号**: 用户名 szsms530，密码 qq@123456

### GitHub
- **账号**: 53131188@qq.com / Token已配置在.git-credentials
- **仓库**: gaojun223/xtool-iran

## Telegram 通道
- **Bot**: @xtool_iran_bot
- **Token**: 存储在 ~/.tg_bot_token
- **架构**: GitHub Actions 长驻 Daemon
- **延迟**: 2-5秒
- **仓库工作流**: tg-daemon.yml
- **Daemon脚本**: proxy/daemon.py
- **客户端**: gh_daemon_client.py (新) / tg_proxy.py (旧)

## 联系方式
- **主人手机(缅甸)**: 09668062879
- **主人手机(中国)**: 13313173532 (可收国际短信，不能发106)
- **中国手机特性**: 在缅甸能收国际短信，但不能发短信到国内短号

## 底层补丁
- **DeepSeek reasoning_content bug**: 已在 run_agent.py 打了补丁
  - 主消息重构 (~line 9025-9043): 所有assistant messages加reasoning_content
  - flush memory (~line 7276-7286): 同上
  - 判断条件: provider=deepseek/custom + api.deepseek.com
  - Hermes v0.10.0 (Apr 22 snapshot)，上游PR #14941已合但当前版未包含

## 项目
- **并行AI代理**: 千问 (部署在 gaoautomation.xyz / Vercel)
  - 功能: 爬虫服务、客户沟通、邮箱发送报价

---

> 最后更新: 2026-04-28
> 此文件由主克隆体维护，所有克隆体启动时拉取最新版本
