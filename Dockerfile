FROM node:8.16.0


RUN mkdir -p /home
ADD . /home/

WORKDIR /home
RUN  npm install 

EXPOSE 3000

CMD node app.js --no-daemon
