const { io } = require("../index");

//message of sockets
io.on("connection", (client) => {
  console.log("client On");

  client.on("disconnect", () => {
    console.log("Client Off");
  });

  client.on("message", (payload) => {
    console.log("Holamundo", payload);
    io.emit("message", { admin: "New Message" });
  });
});
