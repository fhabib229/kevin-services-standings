FROM node:11.6.0

WORKDIR /src/app

COPY ./package.json .

RUN npm install

COPY . .

EXPOSE 4001

CMD [ "npm", "start"]