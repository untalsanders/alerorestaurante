FROM node:lts AS development

# Create app directory, this is in our container/in image
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/

RUN npm ci
COPY . /usr/src/app/

CMD ["npm", "start"]
