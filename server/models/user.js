const mg = require('mongoose');

const user = mg.model('User',
	{ name: String,
    ticketNumber: Number,
    terminalNumber: Number,

  }
);

module.exports = user;
