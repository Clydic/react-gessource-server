FROM node:latest

#Create app directory

WORKDIR /src/app

COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm install cors
RUN npm ci --only=production

COPY . .
ENV JSON_FILE=data/data.json
ENV NODE_ENV=developpement

EXPOSE 3000

CMD ["node", "server.js"]



