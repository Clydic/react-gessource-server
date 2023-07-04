FROM node:16

#Create app directory

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
RUN npm ci --only=production

COPY . .
ENV PORT=4000
ENV HOSTNAME=localhost
ENV JSON_FILE = data/data.json
ENV NODE_ENV = developpement

EXPOSE 4000

CMD ["node", "server.js"]



