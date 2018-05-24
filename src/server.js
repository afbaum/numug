const express = require('express');
const config = require('./config');

const app = express();

app.set('view engine', 'pug');


app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.render("index");
});

app.get('/presentations', (req, res) => {
  res.render("presentations");
});
// app.use('/', function(req, res, next) {
//   res.end("NUMUG!");
// });

app.listen(config.port, function() {
  console.log(`${config.appName} is listening on port ${config.port}`);
});
