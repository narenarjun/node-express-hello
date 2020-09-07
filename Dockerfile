FROM node:14.9.0-alpine3.12

LABEL maintainer="narendran 'narendev0610@gmail.com'"

WORKDIR /server/src

COPY ./src .

WORKDIR /server

COPY app.js .
COPY package.json .

EXPOSE 8000

RUN npm install 

CMD ["npm" , "start"]