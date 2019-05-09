FROM node:8.11.2-alpine as node

WORKDIR /usr/src/app

# COPY package*.json .

RUN npm install -g @angular/cli@6.1.1

COPY . .

EXPOSE 4200

CMD ng serve --host 0.0.0.0 --disable-host-check 
