# darkice-rest
REST endpoint for manipulation of darkice system service. This serves as a thin wrapper
around native linux systemctl command (leveraging **sysctlx** package).

### Prerequisites
- darkice installed as a systemd service (accessible on host linux via native systemctl)
- service named **darkice**

### API
- `http://localhost:port/darkice` - returns structured `systemctl status` in JSON
- `http://localhost:port/darkice/enable` - calls `systemctl enable`
- `http://localhost:port/darkice/disable` - calls `systemctl disable`
- `http://localhost:port/darkice/start` - calls `systemctl start`
- `http://localhost:port/darkice/stop` - calls `systemctl stop`
- `http://localhost:port/darkice/restart` - calls `systemctl restart`

### Usage

`$ sudo node darkice-rest` (with default port `8181`)

`$ sudo node darkice-rest 8080`

### References
- http://www.darkice.org/
- https://www.npmjs.com/package/sysctlx