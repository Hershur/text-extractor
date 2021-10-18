FROM node:14

# Create app directory
WORKDIR /assurancefemi/src/app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

ENV PORT=3000

RUN npm run build

EXPOSE 8080

CMD [ "node", "dist/main" ]