'use strict';
const DARK_ICE = 'darkice';
var ctl = require('sysctlx');

function parseEnableResponse(raw) {
    return raw === '' || raw.match(/created symlink/i) !== null;
}

function parseDisableResponse(raw) {
    return raw == '' || raw.match(/removed/i) !== null;
}

exports.enableDarkIce = function (request, response) {
    ctl.enable(DARK_ICE).then(function (ctlResult) {
        console.log(ctlResult);
        response.json({result: parseEnableResponse(ctlResult)});
    });
};

exports.disableDarkIce = function (request, response) {
    return ctl.disable(DARK_ICE).then(function (ctlResult) {
        console.log(ctlResult);
        response.json({result: parseDisableResponse(ctlResult)});
    });
};

exports.startDarkIce = function (request, response) {
    return ctl.start(DARK_ICE);
};

exports.stopDarkIce = function (request, response) {
    return ctl.stop(DARK_ICE);
};

exports.restartDarkIce = function (request, response) {
    return ctl.restart(DARK_ICE);
};

exports.getDarkIceStatus = function (request, response) {
    ctl.status(DARK_ICE).then(function (status) {
        response.json(status);
    }).catch(function (err) {
        response.send(err);
    });
};