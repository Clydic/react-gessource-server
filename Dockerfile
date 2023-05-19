FROM node:16

#Create app directory

WORKDIR /app

COPY . /app

RUN npm install
RUN npm ci --only=production


EXPOSE 4000

CMD ["node", "server.js"]



