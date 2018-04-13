var express = require('express');
var bodyParser = require('body-parser');
var port = 8181;
var server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

var routes = require('./routes.js');
routes(server);

server.listen(port);
console.log('Server started on port: ' + port);