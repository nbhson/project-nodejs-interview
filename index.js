const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

//New imports
const http = require("http").Server(app);
//Pass the Express app into the HTTP module.
const socketIO = require("socket.io")(http);
const listUser = [];

//enables us to host static CSS & JS files.
//The public folder contains the CSS & JS files.
app.use(express.static(__dirname + "/public"));
socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected`);
  socket.emit("displayId", socket.id);

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  socket.on("setUserName", (data) => {
    listUser.push({ id: socket.id, name: data });
    console.log(listUser);
  });

  socket.on("message", (data) => {
    //sends the data to everyone except you.
    socket.broadcast.emit("response", {
      question: data,
      id: `${socket.id}`,
      user: listUser.find((user) => user.id === socket.id),
    });

    //sends the data to everyone connected to the server
    socket.emit("response", {
      question: data,
      id: `${socket.id}`,
      user: listUser.find((user) => user.id === socket.id),
    });
  });
});

//Route to the homepage of the application
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

//Listens for changes in the web application
http.listen(PORT, () => {
  console.log(`App listening at ${PORT}`);
});
