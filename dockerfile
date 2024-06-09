FROM node:18-alpine

#Create a app directory
WORKDIR /app

# install app dependencies
COPY package*.json ./     

#run npm install
RUN npm install

#copy all the files and code
COPY . .

EXPOSE 8080

CMD [ "npm" ,"start" ]