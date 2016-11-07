'use strict'

const httpFunctions = require('./http-functions');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

httpFunctions(requestOptions, httpFunctions.printHTML)