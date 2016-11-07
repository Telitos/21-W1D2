'use strict'

const https = require('https');


function getAndPrintHTML () {
  console.log("Begin process")
  let chunkArray = [];
   const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    response.on('err', function(err){
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


getAndPrintHTML()
