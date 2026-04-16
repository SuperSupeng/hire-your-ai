#!/bin/bash
# 本地 → 飞书：将本地修改的 Markdown 文件同步到飞书知识库
# 路径相对于仓库根目录
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR/.."

echo "开始同步到飞书知识库..."
jq -r 'to_entries | .[] | .key + "\t" + .value' "$SCRIPT_DIR/sync_config.json" | while IFS=$'\t' read -r file doc_id; do
  if [ -f "$file" ]; then
    echo "正在同步: $file -> $doc_id"
    lark-cli docs +update --doc "$doc_id" --mode overwrite --markdown "$(cat "$file")"
  else
    echo "⚠️ 跳过（文件不存在）: $file"
  fi
done
echo "同步完成！"
