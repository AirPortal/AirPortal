var config = require('./config');
var express = require('express');
var app = express();

var mg = require('mongoose');
mg.connect('mongodb://'+ config.dbHost +'/' + config.dbDatabase);

var routes = require('./routes')(app, mg);
app.listen(config.serverPort, () => {
	console.info("server started");
});
