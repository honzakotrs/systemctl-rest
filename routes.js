'use strict';
module.exports = function(server) {
	var controller = require('./controller.js');

	// todoList Routes
	server.get('/darkice', controller.getDarkIceStatus);
    server.get('/darkice/enable', controller.enableDarkIce);
    server.get('/darkice/disable', controller.disableDarkIce);
    server.get('/darkice/start', controller.startDarkIce);
    server.get('/darkice/stop', controller.stopDarkIce);
    server.get('/darkice/restart', controller.restartDarkIce);
};
