var express = require('express');
var bodyParser = require('body-parser');
var port = process.argv[2] || 8181;
var server = express();

var routes = require('./routes.js');
routes(server);

server.listen(port);
console.log('Server started on port: ' + port);