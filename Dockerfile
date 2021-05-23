FROM node:14-alpine

# Create app directory, this is in our container/in image
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
