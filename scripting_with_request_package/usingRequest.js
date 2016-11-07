// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg', function (err, response) {                                   // Note 2
         if (err) {
          throw err;
        } else if (response.statusCode === 200) {
          console.log('Download finished!')
         }
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Code: ', response.statusCode);
         console.log('Response Status Message: ', response.statusMessage)
         console.log('Response Content Type: ', response.headers['content-type'])

         if (response.statusCode === 200) {
          response.on('data', function(chunk) {
          console.log('Downloading image...')
          })
        }
      })
       .pipe(fs.createWriteStream('./downloaded.jpg'));               // Note 4

// Notes:
// 1. `request.get` is equivalent to `request()`
// 2. `request.on('error', callback)` handles any error
// 3. `request.on('response, callback)` handles the response
// 4. What is happening here?
