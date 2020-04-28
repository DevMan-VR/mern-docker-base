FROM node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . . 

EXPOSE 8000

CMD ["npm", "start"]