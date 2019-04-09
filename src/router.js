const router = require("express").Router();
const messageRouter = require("./message");

router.get("/", (req, res) => res.status(200).json({ message: "I'm alive" }));
router.use("/message", messageRouter);

module.exports = router;
