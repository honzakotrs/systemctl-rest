'use strict';
const DARK_ICE = 'darkice';

let ctl = require('sysctlx');
let http = require('http');

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

exports.enableDarkIce = function (request, response) {
	ctl.enable(DARK_ICE).then(function (result) {
		console.log(result);
		if (parseEnableResponse(result)) {
			sendOk(response);
		} else {
			sendError(response, 'Unable to enable service!');
		}
	});
};

exports.disableDarkIce = function (request, response) {
	ctl.disable(DARK_ICE).then(function (result) {
		console.log(result);
		if (parseDisableResponse(result)) {
			sendOk(response);
		} else {
			sendError(response, 'Unable to disable service!');
		}
	});
};

exports.startDarkIce = function (request, response) {
	ctl.start(DARK_ICE).then(function (result) {
		sendOk(response);
	});
};

exports.stopDarkIce = function (request, response) {
	ctl.stop(DARK_ICE).then(function (result) {
		sendOk(response);
	});
};

exports.restartDarkIce = function (request, response) {
	ctl.restart(DARK_ICE).then(function (result) {
		sendOk(response);
	});
};

exports.getDarkIceStatus = function (request, response) {
	ctl.status(DARK_ICE).then(function (status) {
		response.json(status);
	}).catch(function (err) {
		sendError(response, err);
	});
};