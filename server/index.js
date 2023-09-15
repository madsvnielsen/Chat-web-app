const express = require('express');
const app = express();
http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const server = http.createServer(app);

app.use(cors()); // Add cors middleware

const serverChatName = "Server";

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});


let allUsers = [];

io.on('connection', (socket) => {
    console.log(`User connected ${socket.id}`);

    let timestamp =  Date.now();
    socket.on('join_room', (data) =>{
        const {name, room} = data;
        socket.join(room);
        allUsers.push({name: name, room: room})


        socket.to(room).emit("receive_message", {
            message : `${name} has joined the channel!`,
            name : serverChatName,
            timestamp: timestamp,
            own: false
        });
        socket.emit("receive_message", {
            message : `Welcome, ${name}!`,
            name : serverChatName,
            timestamp: timestamp,
            own: false
        })

        let currentRoomUsers = allUsers.filter((user) => user.room === room);
        socket.to(room).emit("connected_users", currentRoomUsers);
        socket.emit("connected_users", currentRoomUsers);
    });

    socket.on("send_message", (data) => {
        const {message, name, room} = data;
        socket.to(room).emit("receive_message",{
            message: message,
            name: name,
            timestamp: Date.now(),
            own: false
        })
        socket.emit("receive_message",{
                message: message,
                name: "You",
                timestamp: Date.now(),
                own: true
            }


            )
    })

    // We can write our socket event listeners in here...
});

server.listen(5000, () => 'Server is running on port 3000');