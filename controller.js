'use strict';
module.exports = function (server) {

    const DARK_ICE = 'darkice';
    var ctl = require('sysctlx');

    function parseEnableResponse(raw) {
        return raw == '' || raw.match(/created symlink/i);
    }

    return {
        enableDarkIce: function (request, result) {
            ctl.enable(DARK_ICE).then(function (ctlResult) {
                console.log(ctlResult);
                result.json(ctlResult);
            }).catch(function (err) {
                result.send(err); // never happens
            });
        },
        disableDarkIce: function () {
            return ctl.disable(DARK_ICE);
        },
        startDarkIce: function () {
            return ctl.start(DARK_ICE);
        },
        stopDarkIce: function () {
            return ctl.stop(DARK_ICE);
        },
        restartDarkIce: function () {
            return ctl.restart(DARK_ICE);
        },
        getDarkIceStatus: function (request, result) {
            ctl.status(DARK_ICE).then(function (status) {
                result.json(status);
            }).catch(function (err) {
                result.send(err);
            });
        }
    }

};