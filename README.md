# systemctl-rest
[![npm version](https://badge.fury.io/js/systemctl-rest.svg)](https://badge.fury.io/js/systemctl-rest)
[![Build Status](https://travis-ci.org/plesatejvlk/systemctl-rest.svg?branch=master)](https://travis-ci.org/plesatejvlk/systemctl-rest)

REST endpoint for manipulation of system services. This serves as a thin wrapper
around native linux systemctl command (leveraging **sysctlx** package).

### Prerequisites
- linux host supporting service manipulation via **systemctl**

### API
- `http://localhost:<port>/service/<service>` - returns structured `systemctl status` in JSON
- `http://localhost:<port>/service/<service>/enable` - calls `systemctl enable`
- `http://localhost:<port>/service/<service>/disable` - calls `systemctl disable`
- `http://localhost:<port>/service/<service>/start` - calls `systemctl start`
- `http://localhost:<port>/service/<service>/stop` - calls `systemctl stop`
- `http://localhost:<port>/service/<service>/restart` - calls `systemctl restart`

### Usage
#### 1. Directly as a standalone server

When invoked directly from the command line, systemctl-rest configures **express**
server instance and automatically starts listening on given port.

`$ sudo node systemctl-rest` (with default port `8181`)

`$ sudo node systemctl-rest 8080`

#### 2. Required to provide configured server instance

In case you would like to build on top of this package you could reuse the existing
configured **express** instance and add your own routing paths with respective
handlers. This helps you to avoid combining multiple server instances to achieve
your goal with systemctl.

Please note that in this scenario you need to retrieve the port and start listening
on it yourself:

```
let server = require('systemctl-rest');
server.get('/my/custom/path', myHandlerFunction);
...
server.listen(<your-port>);
```


### References
- https://www.npmjs.com/package/sysctlx
- https://www.npmjs.com/package/express
- https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units