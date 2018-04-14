'use strict';

let express = require('express');
let handlers = require('./handlers');
let server = express();
let port = process.argv[2] || 8181;

server.get('/:service', handlers.getServiceStatus);
server.get('/:service/enable', handlers.enableService);
server.get('/:service/disable', handlers.disableService);
server.get('/:service/start', handlers.startService);
server.get('/:service/stop', handlers.stopService);
server.get('/:service/restart', handlers.restartService);

server.listen(port);
console.log('systemctl-rest server started on port: ' + port);