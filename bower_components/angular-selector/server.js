var express = require('express'),
    app = express(),
    endpoints = require('./demo/endpoints'),
    endpoint = '';

app.use(express.static(__dirname + '/'));

// Route
for (endpoint in endpoints) {
  if (endpoints.hasOwnProperty(endpoint)) {
    app.all(endpoint, require(endpoints[endpoint]));
  }
}

app.listen(9201);
console.log('Express server started on port 9201');