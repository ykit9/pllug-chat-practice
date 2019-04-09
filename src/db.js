const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/pllug-practice-1");
mongoose.connection.on("connection", () => console.log("mongodb connected"));

module.exports = mongoose;
