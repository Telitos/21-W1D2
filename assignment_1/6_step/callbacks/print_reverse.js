'use strict'


const httpFunctions = require('./http-functions')


function reverseHTML (html) {
  console.log(html.split('').reverse().join(''));
}

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

httpFunctions(requestOptions, reverseHTML)