'use strict';

const TinyURL = require('tinyurl');

const classResponse = require('../class/response.js');

const tinyurlController = function() {

  const shorten = function(response, query) {
    var responseObj = new classResponse();
    TinyURL.shorten(query.url).then(function(res) {
      if(res === 'Error') {
        responseObj.status = 400;
        responseObj.message = 'Invalid URL';
        response.status(200)
          .end(JSON.stringify(responseObj));
      } else {
        responseObj.status = 200;
        responseObj.payload = {
          'url': res
        };
        response.status(200)
          .end(JSON.stringify(responseObj));
      }
    }, function(err) {
      responseObj.status = 400;
      responseObj.message = 'Invalid URL';
      response.status(200)
        .end(JSON.stringify(responseObj));
    })
  }

  return {
    shorten
  }
}();

// const app = express();

// app.get('/', (req, res) => {
//   res.status(200)
//     .send('Hello, world!')
//     .end();
// });

// // Start the server
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}`);
//   console.log('Press Ctrl+C to quit.');
// });
// // [END gae_node_request_example]

module.exports = tinyurlController;