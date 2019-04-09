const app = require("express")();
const http = require("http").Server(app);

const port = process.env.PORT || 3000;

const router = require("./src/router");
app.use(router);

const io = require("./src/io")(http);

http.listen(port, function() {
  console.log("listening on *:" + port);
});
