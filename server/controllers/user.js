const ticketModel = require(__dirname + '/../models/ticket');
const weatherController = require(__dirname + '/weather');

module.exports = {
  login: (req, res) => {
    const ticketNumber = req.body.ticketNumber;
    console.log(req.body);
    ticketModel.findOne({ ticket_number: ticketNumber}, (err, ticket) => {
      const responseObj = {msg: err};
      if(err) res.send(responseObj);
      const oldDate = new Date();
      const fifthteenMinutesLater = new Date(oldDate.getTime() + 15 * 60000);
      ticket = ticket || {};
      ticket.boarding_time = fifthteenMinutesLater;
      res.send(ticket);
    });
  }
};
