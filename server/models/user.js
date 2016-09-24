const mg = require('mongoose');

const user = mg.model('User',
	{ name: String }
);

module.exports = user;
