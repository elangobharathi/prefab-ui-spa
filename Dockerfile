FROM node:11-alpine

RUN mkdir -p /www/app
WORKDIR /www/app

EXPOSE 3000

CMD ["npm","start"]