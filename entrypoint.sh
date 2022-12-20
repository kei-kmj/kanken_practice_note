#!/bin/bash
set -e

if [ -f ./db/development.sqlite3 ]; then
  rm ./db/development*
fi

# Restore the database
litestream restore -v -if-replica-exists -o ./db/development.sqlite3 gcs://kankendb

# Run litestream with your app as the subprocess.
exec litestream replicate -exec "rails server -p 8080 -b 0.0.0.0"