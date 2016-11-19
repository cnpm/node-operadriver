'use strict';

var path = require('path');
var cp = require('child_process');

process.env.PATH += path.delimiter + path.join(__dirname, 'operadriver');

exports.path = process.platform === 'win32' ?
  path.join(__dirname, 'operadriver', 'operadriver.exe') : path.join(__dirname, 'operadriver', 'operadriver');
exports.version = '0.2.2';

exports.start = function start(args) {
  exports.defaultInstance = cp.execFile(exports.path, args);
  return exports.defaultInstance;
};

exports.stop = function stop() {
  if (exports.defaultInstance != null) {
    exports.defaultInstance.kill();
  }
};
