const ticketModel = require(__dirname + '/../models/ticket');
const weatherController = require(__dirname + '/weather');

module.exports = {
  login: (req, res) => {
    const ticketNumber = req.body.ticketNumber;

    ticketModel.findOne({ ticket_number: ticketNumber}, (err, ticket) => {
      const responseObj = {msg: err};
      if(err) res.send(responseObj);
      res.send(ticket);
    });
  }
};
