# Указываем, какую версию библиотеки, ЯП и т.д. собираемся установить

FROM node:latest

# Указываем рабочую папку
WORKDIR  /social

# Копируем все файлы в папку quiz
COPY .  /social

# Порт
EXPOSE 4000

# Устанавливаем зависимости 
RUN npm i

# Команда запуска
CMD ["npm", "run", "dev"]

# docker build -t react_network .

# docker run -p 4000:4000 react_network