#!/bin/bash
set -e

cd ~/production-project
npm run build:prod

TARGET="/var/www/production-project/html"

rm -rf "$TARGET"
mv ~/production-project/build "$TARGET"

chown -R www-data:www-data "$TARGET"
chmod -R 755 "$TARGET"

echo "Деплой завершён успешно, 403 больше не будет!"