const mg = require('mongoose');

const ticket = mg.model('Ticket',
	{ ticketNumber: Number,
    terminal: Number,
    origin: String,
    destination: String,
    gate: Number,
    boarding_time: Date,
    flight_number: Number,
    airline_carrier: String,
    bag_tags: [String]
  }
);

module.exports = ticket;
