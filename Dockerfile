FROM node:8.16.0


RUN mkdir -p /home
ADD . /home/

WORKDIR /home
RUN  npm install 

CMD node app.js --no-daemon
