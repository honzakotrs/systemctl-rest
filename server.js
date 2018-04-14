'use strict';

let express = require('express');
let handlers = require('./handlers');
let server = express();

server.get('/service/:service', handlers.getServiceStatus);
server.get('/service/:service/enable', handlers.enableService);
server.get('/service/:service/disable', handlers.disableService);
server.get('/service/:service/start', handlers.startService);
server.get('/service/:service/stop', handlers.stopService);
server.get('/service/:service/restart', handlers.restartService);

if (require.main === module) {
	let port = process.argv[2] || 8181;
	server.listen(port);
	console.log('systemctl-rest server started on port: ' + port);
} else {
	exports.server = server;
}