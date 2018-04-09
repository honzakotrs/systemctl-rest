var ctl = require('sysctlx');

//ctl.status('darkice').then(status => { console.log(status); });
ctl.isEnabled('darkice').then(en => { console.log(en); });
//ctl.stop('darkice').then(r => { console.log(r); });
//ctl.disable('darkice.service').then(r => { console.log(r); });
ctl.status('darkice').then(status => { console.log(status); });
