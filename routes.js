'use strict';
module.exports = function(server) {
	var controller = require('./controller.js');

	// todoList Routes
	server.get('/darkice', controller.getDarkIceStatus);
    server.get('/darkice/enable', controller.enableDarkIce);
};
