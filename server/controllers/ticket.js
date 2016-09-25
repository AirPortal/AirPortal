const ticketModel = require(__dirname + '/../models/ticket');

module.exports = {
  parseQRString= str => {
    if(!str) return null;
    const columns = str.split(',');

    const origin = columns[0];
    const destination = columns[1];
    const terminal = columns[2];
    const gate = columns[3];
    const flight_number = columns[4];
    const boarding_time = columns[5];
    const row = columns[6];
    const seat = columns[7];
    const first_name = columns[7];
    const last_name = columns[8];
    const bag_tag = columns[9];

    const ticket = new ticketModel();
    ticket.terminal = terminal;
    ticket.origin = origin;
    ticket.destination = destination;
    ticket.gate = gate;
    ticket.flight_number = flight_number;
    ticket.boarding_time = boarding_time;
    ticket.row = row;
    ticket.bag_tags = [bag_tag];

    ticketModel.save((err, u) => {
      if(err) return console.error(err);

    });
    console.log(columns);
  }
};
