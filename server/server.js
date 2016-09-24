const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const mg = require('mongoose');
mg.connect('mongodb://' + config.dbHost + '/' + config.dbDatabase);

app.use(bodyParser.json({limit: '50mb'})); // for parsing application/json
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000})); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/../client'));
app.use('/', express.static(__dirname + '/../client/index.html'));
const routes = require('./routes');
app.use('/', routes);

app.listen(config.serverPort, () => {
  console.info('server started');
});
