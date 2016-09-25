const userModel = require(__dirname + '/../models/user');
const ticketModel = require(__dirname + '/../models/ticket');

module.exports = {
  login: (req, res) => {
    const user = new userModel();
    user.name = req.body.name;
    user.ticketNumber = req.body.ticketNumber;
    user.save((err, u) => {
      if(err) return console.error(err);
      const msg = {msg: 'user created'};
      res.send(JSON.stringify(msg));
    });
  }
};
