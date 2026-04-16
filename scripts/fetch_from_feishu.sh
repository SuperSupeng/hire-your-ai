#!/bin/bash
# 飞书 → 本地：从飞书知识库拉取最新内容到本地文件夹
# 路径相对于仓库根目录
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR/.."

echo "开始从飞书拉取..."
jq -r 'to_entries | .[] | .key + "\t" + .value' "$SCRIPT_DIR/sync_config.json" | while IFS=$'\t' read -r file doc_id; do
  dir=$(dirname "$file")
  [ "$dir" != "." ] && mkdir -p "$dir"
  content=$(lark-cli docs +fetch --doc "$doc_id" 2>/dev/null | jq -r '.data.markdown // empty')
  if [ -n "$content" ]; then
    echo "$content" > "$file"
    echo "✅ $file"
  else
    echo "❌ $file (拉取失败)"
  fi
done
echo "拉取完成！"
