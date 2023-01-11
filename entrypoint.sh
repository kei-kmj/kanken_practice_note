#!/bin/bash
set -e

if [ -f /app/db/development.sqlite3 ]; then
  mv /app/db/development.sqlite3 /app/db/development.sqlite3.bk
fi

# Restore the database
litestream restore -v -if-replica-exists -config /etc/litestream.yml /app/db/development.sqlite3

if [ -f /app/db/development.sqlite3]; then
  echo "---- Restored from Cloud Storage ----"
  rm /app/db/development.sqlite3.bk
else
  # 初回起動時にはレプリカが未作成であり、リストアに失敗するので、
  # その場合には、冒頭でリネームしたdbファイルを元の名前に戻す
  echo "---- Failed to restore from Cloud Storage ----"
  mv /app/db/development.sqlite3.bk /app/db/development.sqlite3
fi

rm -f /app/tmp/pids/server.pid

exec litestream replicate -exec "rails server -p 8080 -b 0.0.0.0"
