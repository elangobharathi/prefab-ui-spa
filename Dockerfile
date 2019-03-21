FROM node:11-alpine

RUN mkdir -p /www/app
WORKDIR /www/app

RUN npm install -g serve

EXPOSE 3000

COPY build/ ./

CMD ["serve", "--single", "--listen", "3000"]
