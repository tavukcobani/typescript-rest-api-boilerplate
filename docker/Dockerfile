FROM node:16

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./

EXPOSE 4334
ENTRYPOINT ["npm", "run", "serve"]