FROM node:13

ENV NODE_ENV production
ENV WEB_APP_URL https://dialog-test.netlify.app/

WORKDIR /usr/src/app

COPY package*.json yarn.lock ./

ADD . /usr/src/app

RUN npm install --production

CMD [ "npm", "start" ]
EXPOSE 4000