const express = require('express');
const app = express();
const cors = require("cors");
const http = require("http");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

const routercontroller = require('./controllers/router.controller');
app.use("/router",routercontroller);

const db = require("./models");

db.sequelize.sync().then((req) => {
  var port = normalizePort(process.env.PORT || "4000");
  app.set("port", port);
  /** START THE SERVER **/
  app.listen(port, (req, res) => {
    console.log("Server is running on port : " + port);
  });
});

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
      // named pipe
      return val;
    }
    if (port >= 0) {
      // port number
      return port;
    }
    return false;

  }

  exports = module.exports = app;