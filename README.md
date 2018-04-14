# systemctl-rest
[![Build Status](https://travis-ci.org/plesatejvlk/systemctl.svg?branch=master)](https://travis-ci.org/plesatejvlk/systemctl-rest)

REST endpoint for manipulation of system services. This serves as a thin wrapper
around native linux systemctl command (leveraging **sysctlx** package).

### Prerequisites
- linux host supporting service manipulation via **systemctl**

### API
- `http://localhost:port/<service>` - returns structured `systemctl status` in JSON
- `http://localhost:port/<service>/enable` - calls `systemctl enable`
- `http://localhost:port/<service>/disable` - calls `systemctl disable`
- `http://localhost:port/<service>/start` - calls `systemctl start`
- `http://localhost:port/<service>/stop` - calls `systemctl stop`
- `http://localhost:port/<service>/restart` - calls `systemctl restart`

### Usage

`$ sudo node systemctl-rest` (with default port `8181`)

`$ sudo node systemctl-rest 8080`

### References
- https://www.npmjs.com/package/sysctlx
- https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units