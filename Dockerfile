# Используем официальный Node.js образ
FROM node:22

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build

# Добавим применение миграций в БД
RUN npm run migrate:deploy

# Команда запуска
CMD ["npm", "run", "start:prod"]
