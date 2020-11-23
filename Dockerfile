FROM node:12.19.0

WORKDIR /app

COPY . /app

RUN npm install

CMD npm start

EXPOSE 3000