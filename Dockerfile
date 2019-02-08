# base image
FROM node:8-alpine

# set working directory
RUN mkdir /app
WORKDIR /app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@2.1.3 -g --silent

COPY . .

# start app
CMD ["npm", "start"]
# production
#CMD ["node", "app.js"]
