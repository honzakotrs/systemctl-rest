'use strict';
module.exports = function(server) {
	var handlers = require('./handlers.js');

	// todoList Routes
	server.get('/darkice', handlers.getDarkIceStatus);
	server.get('/darkice/enable', handlers.enableDarkIce);
	server.get('/darkice/disable', handlers.disableDarkIce);
	server.get('/darkice/start', handlers.startDarkIce);
	server.get('/darkice/stop', handlers.stopDarkIce);
	server.get('/darkice/restart', handlers.restartDarkIce);
	server.get('/stream', handlers.getStreamStatus);
};
