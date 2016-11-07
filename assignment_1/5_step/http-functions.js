'use strict'

const https = require('https');

module.exports = function getHTML (options, callback) {

  console.log("Begin process")
  let chunkArray = [];


  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('err', function(error) {
      console.log("An error occurred:", err)
    })

    response.on('data', function(chunk) {
      chunkArray.push(chunk)
    })

    response.on('end', function() {
      callback(chunkArray.join(''))
      console.log('Response stream complete')
    })
  })
}

function printHTML (html) {
  console.log(html);
}