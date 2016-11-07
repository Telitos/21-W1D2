'use strict'


const httpFunctions = require('./http-functions')


function toUpperCaseHTML (html) {
  console.log(html.toUpperCase());
}

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

httpFunctions(requestOptions, toUpperCaseHTML)