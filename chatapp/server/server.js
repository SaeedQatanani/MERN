const express = require('express');
const app = express();

const server = app.listen(8000, () =>
    console.log('The server is all fired up on port 8000')
);
const io = require('socket.io')(server, { cors: true });

const msgs = [];
io.on("connection", socket => {
    console.log("Nice to meet me.");
    socket.emit("welcome", "Welcome to our socket!");
    io.emit("messages_to_chat", msgs);
    socket.on("message_from_client", data => {
        msgs.push(data);
        io.emit("messages_to_chat", msgs);
    });
    socket.on("new_user", data => {
        msgs.push({msg:data+" has joined the chat"});
        io.emit("messages_to_chat", msgs);
    })
});