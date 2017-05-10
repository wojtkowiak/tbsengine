const shelljs = require('shelljs');
const path = require('path');
shelljs.cp('-Rf',
  path.join(__dirname, '..', 'node_modules', '@blueprintjs', 'core', 'resources'),
  path.join(__dirname, '..', 'public')
);
