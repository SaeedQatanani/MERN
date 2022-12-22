const express = require('express');
const app = express();

const server = app.listen(8000, () =>
    console.log('The server is all fired up on port 8000')
);
const io = require('socket.io')(server, { cors: true });

io.on("connection", socket => {
    console.log("Nice to meet you.");
    // socket.on("connection", () => {
        socket.emit("welcome", "Welcome to our socket!");
    // });
});