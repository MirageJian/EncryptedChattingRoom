# Encrypted Chatting Room

This is a chatting room which can encrypted all the messages in the room and hash chain to keep messages unmodified.

We used mongoDB as database, Angular as front-end, Websock for notification and update of messages and spring-boot as back-end.

## How to run the source code with docker

All commands will require `sudo` prefix if you are not root user.

User Docker Compose to run the code and ensure you have internet access to download some images.

`docker-compose up --build`

**Open another teriminal execute the following** for the access of client web pages. 

`docker exec -ti encryptedchattingroom_nginx_1 chown -R nginx /usr/share/nginx/html`

And then visit the chatting room

For **Linux or Docker Desktop**, please visit `http://localhost/?local=localhost:8080` [Click Here](http://localhost/?local=192.168.99.100:8080)

In **Windows with Docker Toolbox**, please visit `http://192.168.99.100/?local=192.168.99.100:8080` [Click Here](http://192.168.99.100/?local=192.168.99.100:8080)

## Run without docker

Ensure local machine has **MongoDB** and it's serving on `27017` port.

Compile projects first `NginxServer, Server, Client1, Client2`

Run these project in proper order. (Nginx Server will start a simple web server for the access of chatting room client)

Visit `http://localhost/?local=localhost:8080` [Click Here](http://localhost/?local=192.168.99.100:8080)

