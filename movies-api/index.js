const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesAPI = require("./routes/movies")

app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/json', function(req, res) {
  res.json({ hello: 'world' });
});


moviesAPI(app)

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
