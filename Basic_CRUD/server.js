const express = require('express');
const app = express();
const con = require('./db_connect');
const cors = require('cors');
const http = require('http');
const RouterController = require('./controllers/router.controller');
// const multer = require("multer");
// const path = require('path');
var router = express.Router();
// -- MIDDLEWARE ---
app.use(cors());
// CORS HEADERS MIDDLEWARE
/*app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id, Blob");
    res.contentType('application/json');
    req.header("Content-Type", "application/json");
    next();
});*/
app.use(express.json());
app.use(express.urlencoded({extended: true}));
/** ------- SOCKET INITIALIZATION --- */
const server = http.createServer(app);
//const io = require('socket.io')(server);
app.use('/router', RouterController);
var port = normalizePort(process.env.PORT || '4000');
app.set('port', port);
/** START THE SERVER */
server.listen(port, (req, res) => {
    console.log('Server is running on port : ' + port);
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