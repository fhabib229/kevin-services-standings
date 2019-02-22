FROM node:11.6.0

WORKDIR /app

COPY ./package.json .

RUN npm install --verbose

COPY . .

CMD "npm start"