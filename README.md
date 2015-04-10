OperaDriver
=======

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Gittip][gittip-image]][gittip-url]
[![David deps][david-image]][david-url]
[![iojs version][iojs-image]][iojs-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/operadriver.svg?style=flat-square
[npm-url]: https://npmjs.org/package/operadriver
[travis-image]: https://img.shields.io/travis/cnpm/operadriver.svg?style=flat-square
[travis-url]: https://travis-ci.org/cnpm/operadriver
[gittip-image]: https://img.shields.io/gittip/fengmk2.svg?style=flat-square
[gittip-url]: https://www.gittip.com/fengmk2/
[david-image]: https://img.shields.io/david/cnpm/operadriver.svg?style=flat-square
[david-url]: https://david-dm.org/cnpm/operadriver
[iojs-image]: https://img.shields.io/badge/io.js-%3E=_1.0-yellow.svg?style=flat-square
[iojs-url]: http://iojs.org/
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/operadriver.svg?style=flat-square
[download-url]: https://npmjs.org/package/operadriver

___This project forked from [giggio/node-chromedriver](https://github.com/giggio/node-chromedriver).___

An NPM wrapper for Selenium [OperaDriver](https://github.com/operasoftware/operachromiumdriver/releases).

Building and Installing
-----------------------

```shell
$ npm install operadriver
```

Or grab the source and

```shell
$ node ./install.js
```

What this is really doing is just grabbing a particular "blessed" (by
this module) version of OperaChromiumDriver. As new versions are released
and vetted, this module will be updated accordingly.

The package has been set up to fetch and run OperaChromiumDriver for MacOS (darwin),
Linux based platforms (as identified by nodejs), and Windows. If you
spot any platform weirdnesses, let us know or send a patch.

### Custom binaries url

To use a mirror of the OperaDriver binaries use npm config property `operadriver_cdnurl`.
Default is `http://cnpmjs.org/mirrors/operadriver`.

```shell
npm install operadriver --operadriver_cdnurl=http://npm.taobao.org/mirrors/operadriver
```

Or add property into your [`.npmrc`](https://docs.npmjs.com/files/npmrc) file.

```ini
operadriver_cdnurl=http://npm.taobao.org/mirrors/operadriver
```

Another option is to use PATH variable `OPERADRIVER_CDNURL`.

```shell
OPERADRIVER_CDNURL=http://npm.taobao.org/mirrors/operadriver npm install operadriver
```

Running
-------

```shell
bin/operadriver [arguments]
```

And npm will install a link to the binary in `node_modules/.bin` as
it is wont to do.

Running via node
----------------

The package exports a `path` string that contains the path to the
chromdriver binary/executable.

Below is an example of using this package via node.

```javascript
var childProcess = require('child_process');
var operadriver = require('operadriver');
var binPath = operadriver.path;

var childArgs = [
  'some argument'
];

childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
  // handle results
});

```

You can also use the start and stop methods:


```javascript
var operadriver = require('operadriver');

operadriver.start();
//run your tests
operadriver.stop();
```

Versioning
----------

The NPM package version tracks the version of operadriver that will be installed,
with an additional build number that is used for revisions to the installer.

A Note on operadriver
-------------------

operadriver is not a library for NodeJS.

This is an _NPM wrapper_ and can be used to conveniently make OperaDriver available
It is not a Node JS wrapper.

Contributing
------------

Questions, comments, bug reports, and pull requests are all welcome.  Submit them at
[the project on GitHub](https://github.com/cnpm/node-operadriver/).

Bug reports that include steps-to-reproduce (including code) are the
best. Even better, make them in the form of pull requests.

Origin Author
------

[Giovanni Bassi](https://github.com/giggio)

Thanks for Obvious and their PhantomJS project for heavy inspiration! Check their project on [Github](https://github.com/Obvious/phantomjs/tree/master/bin).

License
-------

MIT
