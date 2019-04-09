const messageController = require("./message/message.controller");

module.exports = http => {
  const io = require("socket.io")(http);

  const emitMessage = message => io.emit("chat message", message);

  const sendSystemMessage = (action, username = "anon") => {
    messageController
      .saveMessage({
        text: `user ${username} ${action}`,
        type: "system",
        username
      })
      .then(emitMessage);
  };

  io.on("connection", function(socket) {
    const username = socket.handshake.query.name || "anon";

    sendSystemMessage("connected", username);
    socket.on("chat message", function(text) {
      messageController
        .saveMessage({
          text,
          type: "user",
          username
        })
        .then(emitMessage);
    });

    socket.on("disconnect", () => {
      sendSystemMessage("disconnected", username);
    });
  });
};
