const mongoose = require("../db");

const messageSchema = mongoose.Schema(
  {
    text: String,
    type: String,
    username: {
      type: String,
      default: "anon"
    }
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "createdAt",
      updatedAt: false
    }
  }
);

const messageModel = mongoose.model("Message", messageSchema);

module.exports = messageModel;
