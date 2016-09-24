var config = require('./config');
var express = require('express');
var app = express();

var mg = require('mongoose');
mg.connect('mongodb://' + config.dbHost + '/' + config.dbDatabase);

var routes = require('./routes');
app.use('/', routes);
app.use(express.static(__dirname + '/../client'));
app.use('/', express.static(__dirname + '/../client/index.html'));

app.listen(config.serverPort, () => {
  console.info('server started');
});
