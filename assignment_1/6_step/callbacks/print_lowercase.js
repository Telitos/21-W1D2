'use strict'


const httpFunctions = require('./http-functions')


function toLowerCaseHTML (html) {
  console.log(html.toLowerCase());
}

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

httpFunctions(requestOptions, toLowerCaseHTML)