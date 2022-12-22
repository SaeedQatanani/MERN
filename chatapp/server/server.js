const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(8000, () =>
    console.log('The server is all fired up on port 8000')
);
const io = require('socket.io')(server, { cors: true });

var msgs = [];
app.post("/api", (req, res) => {
    msgs.push(req.body);
    res.json({ status: "ok" });
});

io.on("connection", socket => {
    console.log("Nice to meet me.");
    socket.emit("welcome", "Welcome to our socket!");
    socket.on("message_from_client", data => {
        msgs = [...msgs, data];
        io.emit("message_to_chat", data);
    });
    socket.emit("all_msgs_back", msgs);
});