'use strict';

let express = require('express');
let handlers = require('./handlers');
let server = express();
let port = process.argv[2] || 8181;

server.get('/darkice', handlers.getDarkIceStatus);
server.get('/darkice/enable', handlers.enableDarkIce);
server.get('/darkice/disable', handlers.disableDarkIce);
server.get('/darkice/start', handlers.startDarkIce);
server.get('/darkice/stop', handlers.stopDarkIce);
server.get('/darkice/restart', handlers.restartDarkIce);

server.listen(port);
console.log('DarkIce systemctl server started on port: ' + port);