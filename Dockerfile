FROM node:14
WORKDIR /viwit-score
COPY package*.json /viwit-score/
RUN npm install
COPY . /viwit-score/
EXPOSE 8000
CMD ["node","app.js"]