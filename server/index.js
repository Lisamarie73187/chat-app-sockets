const express = require("express");
const app = express();
const server = require("http").Server(app);


const io = require('socket.io')(server, {
    cors: {
        origin: "http://symptomatic-trains.surge.sh",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});

io.on("connection", socket => {
     console.log('connected')

    socket.on("chat message", msg => {
        io.emit("chat message", msg);
    });
});

const PORT = 8080;
server.listen(PORT, () => console.log(`Listen on *: ${PORT}`));
