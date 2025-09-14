#!/bin/bash
set -e

echo "Starting production deployment..."

# Применение миграций
echo "Applying database migrations..."
npm run migrate:deploy

# Генерация Prisma клиента (если нужно)
echo "Generating Prisma client..."
npm run prisma:generate

# Запуск приложения
echo "Starting application..."
exec npm run start:prod
