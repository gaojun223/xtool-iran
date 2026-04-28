#!/bin/bash
# 共享记忆同步脚本
# 所有克隆体启动时运行此脚本拉取最新记忆
# 修改记忆后运行此脚本推送更新

set -e

REPO_DIR="/home/agentuser/xtool-iran"
MEMORY_DIR="${REPO_DIR}/_shared_memory"

cd "$REPO_DIR"

case "${1:-pull}" in
  pull)
    echo "[记忆同步] 拉取最新共享记忆..."
    git pull --rebase --no-edit
    echo "[记忆同步] ✓ 完成"
    ;;
  push)
    echo "[记忆同步] 推送记忆更新..."
    git add _shared_memory/
    git commit -m "sync: memory update $(date -u '+%Y-%m-%d %H:%M:%S UTC')"
    git push
    echo "[记忆同步] ✓ 完成"
    ;;
  status)
    echo "=== 共享记忆状态 ==="
    echo "仓库: $(git remote get-url origin)"
    echo "分支: $(git branch --show-current)"
    echo "最新提交: $(git log -1 --oneline)"
    echo "修改文件:"
    git status --short _shared_memory/
    ;;
  snapshot)
    TAG="memory-snapshot-$(date -u '+%Y%m%d')"
    git tag -f "$TAG"
    git push origin "$TAG"
    echo "[记忆快照] ✓ 已创建标签: $TAG"
    ;;
  *)
    echo "用法: $0 {pull|push|status|snapshot}"
    echo "  pull     - 拉取最新共享记忆 (默认)"
    echo "  push     - 推送本地记忆修改"
    echo "  status   - 查看记忆状态"
    echo "  snapshot - 创建当日快照标签"
    exit 1
    ;;
esac
