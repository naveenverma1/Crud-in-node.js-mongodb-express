function start() {
var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  port = process.env.port || 2000;
require("./../config/database")(app);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.listen(port);
console.log('Dating RESTful API server started on: ' + port);
}
exports.start = start;
