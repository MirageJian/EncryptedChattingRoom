# Encrypted Chatting Room

This is a chatting room which can encrypted all the messages in the room and hash chain to keep messages unmodified.

We used mongoDB as database, Angular as front-end, Websock for notification and update of messages and spring-boot as back-end.


## How to run the source code

User Docker Compose to run the code and ensure you have internet access to download some images.

`docker-compose up --build`

And then visit the chatting room

In **Windows with Docker Toolbox**, please visit `http://192.168.99.100/?local=192.168.99.100:8080` [Click Here](http://192.168.99.100/?local=192.168.99.100:8080)

For **Linux** or Normal version of Docker, please visit `http://localhost/?local=localhost:8080` [Click Here](http://localhost/?local=192.168.99.100:8080)
