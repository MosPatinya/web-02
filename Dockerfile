FROM node:alpine3.11

WORKDIR /app

COPY . .

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

EXPOSE 3000

CMD ["npm","start"]