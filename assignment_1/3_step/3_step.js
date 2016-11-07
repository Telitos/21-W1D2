'use strict'

const https = require('https');


function getAndPrintHTML (options) {
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
      console.log('Response stream complete.');
      console.log('Here it is:', chunkArray.join(''))
    })
  })
}

 const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions)
