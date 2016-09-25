const mg = require('mongoose');

const ticket = mg.model('Ticket',
  {
    ticket_number: Number,
    terminal: Number,
    origin: String,
    destination: String,
    gate: String,
    boarding_time: Date,
    flight_number: String,
    airline_carrier: String,
    row: String,
    bag_tags: [String],
    flight_class: String
  }
);

module.exports = ticket;
