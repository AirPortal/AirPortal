var config = require('./config');
var express = require('express');

module.exports = (app, mg) => {
	app.use(express.static(__dirname + '/../client'));
	app.use('/', express.static(__dirname + '/../client/index.html'));

};
