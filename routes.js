'use strict';
module.exports = function(server) {
	var controller = require('controller');

	// todoList Routes
	server.route('/darkice')
		.get(controller.status);
		//.post(todoList.create_a_task);
    server.route('/darkice/enable')
        .get(controller.enableDarkIce);
};
