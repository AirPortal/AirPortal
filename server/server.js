const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const mg = require('mongoose');
mg.connect('mongodb://' + config.dbHost + '/' + config.dbDatabase);

app.use(express.static(__dirname + '/../client'));
app.use('/', express.static(__dirname + '/../client/index.html'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
const routes = require('./routes');
app.use('/', routes);

app.listen(config.serverPort, () => {
  console.info('server started');
});
