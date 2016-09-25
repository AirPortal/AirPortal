const userModel = require(__dirname + '/../models/user');
const ticketModel = require(__dirname + '/../models/ticket');

const weatherController = require(__dirname + '/weather');

module.exports = {
  login: (req, res) => {
    // const user = new userModel();
    // user.name = req.body.name;
    // user.ticketNumber = req.body.ticketNumber;
    // user.save((err, u) => {
    //   if(err) return console.error(err);
    //   const msg = {msg: 'user created'};
    //   res.send(JSON.stringify(msg));
    // });
    const ticketNumber = req.body.ticketNumber;

    // userModel.populate('Ticket').findOne({ title: 'Once upon a timex.' })

    const responseObject = {
      name: ''
    };
    res.send(JSON.stringify(responseObject));
  }
};
