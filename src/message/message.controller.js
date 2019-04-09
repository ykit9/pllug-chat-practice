const messageModel = require("./message.model");

module.exports = {
  saveMessage: data => messageModel.create(data),
  getAll: (req, res, next) => {
    const { skip = 0, limit = 10 } = req.query;
    messageModel
      .find()
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .then(messages => res.json({ messages }));
  }
};
