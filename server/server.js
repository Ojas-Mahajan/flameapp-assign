const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const users = {}; // store connected users


const app = express();
app.use(cors());

const server = http.createServer(app);

// HELPER FUNCTIONS
function getRandomColor() {
  const colors = ["#ef476f","#ffd166","#06d6a0","#118ab2","#073b4c","#f94144","#f3722c","#90be6d","#577590"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function generateUsername() {
  return "User-" + Math.floor(Math.random() * 1000);
}



const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});


io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
