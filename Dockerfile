FROM node:18-alpine

WORKDIR /usr/regional_flavours_application

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000 

CMD [ "npm", "run", "dev" ]

