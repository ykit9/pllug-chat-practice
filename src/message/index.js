const router = require("express").Router();
const messageController = require("./message.controller");

router.get("/",messageController.getAll);

module.exports = router;
