'use strict';

let ctl = require('sysctlx');

function parseEnableResponse(raw) {
	return raw === '' || raw.match(/created symlink/i) !== null;
}

function parseDisableResponse(raw) {
	return raw === '' || raw.match(/removed/i) !== null;
}

function sendError(response, message) {
	response.status(400);
	response.send(message);
}
function sendOk(response) {
	response.status(200);
	response.json({result: true});
}

exports.enableService = function (request, response) {
	let service = request.params.service;
	ctl.enable(service).then(function (result) {
		console.log(result);
		if (parseEnableResponse(result)) {
			sendOk(response);
		} else {
			sendError(response, 'Unable to enable service!');
		}
	});
};

exports.disableService = function (request, response) {
	let service = request.params.service;
	ctl.disable(service).then(function (result) {
		console.log(result);
		if (parseDisableResponse(result)) {
			sendOk(response);
		} else {
			sendError(response, 'Unable to disable service!');
		}
	});
};

exports.startService = function (request, response) {
	let service = request.params.service;
	ctl.start(service).then(function (result) {
		sendOk(response);
	});
};

exports.stopService = function (request, response) {
	let service = request.params.service;
	ctl.stop(service).then(function (result) {
		sendOk(response);
	});
};

exports.restartService = function (request, response) {
	let service = request.params.service;
	ctl.restart(service).then(function (result) {
		sendOk(response);
	});
};

exports.getServiceStatus = function (request, response) {
	let service = request.params.service;
	ctl.status(service).then(function (status) {
		if (status) {
			response.json(status);
		} else {
			sendError(response, 'Unknown service \'' + service + '\'');
		}
	}).catch(function (err) {
		sendError(response, err);
	});
};