'use strict';

const express = require('express');
const cors = require('cors');
const url = require('url');

const tinyurlController = require('./controllers/tinyurlController.js');
const corsOptions = require('./configs/cors.js');

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.all('*', (request, response, next) => {
  response.setHeader('Content-Type', 'application/json');
  next();
})

app.get('/', (request, response) => {
  response.redirect('https://shorten-url-dot-blacktoolbox.appspot.com/')
});

app.get('/shorten', (request, response) => {
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;
  tinyurlController.shorten(response, query);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;