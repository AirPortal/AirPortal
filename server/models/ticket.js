const mg = require('mongoose');

const ticket = mg.model('Ticket',
  {
    _id: Number,
    ticket_number: Number,
    terminal: Number,
    origin: String,
    destination: String,
    gate: Number,
    boarding_time: Date,
    flight_number: Number,
    airline_carrier: String,
    row: String,
    bag_tags: [String],
    flight_class: String
  }
);

module.exports = ticket;
