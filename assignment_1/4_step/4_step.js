'use strict'

const https = require('https');

function getHTML (options, callback) {

  console.log("Begin process")
  let chunkArray = [];


  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('err', function(error){
      console.log("This is the error:", err)
    })

    response.on('data', function(chunk) {
      chunkArray.push(chunk)
    })

    response.on('end', function() {
      printHTML(chunkArray.join(''))
      console.log('Response stream complete')
    })
  })
}

function printHTML (html) {
  console.log(html);
}

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)