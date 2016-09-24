const userModel = require(__dirname + '/../models/user');

module.exports = (req, res) => {
  console.log('creating user');
  const user = new userModel;
  user.save((err, u) => {
    if(err) return console.error(err);
    const msg = {msg: 'user created'};
    res.send(JSON.stringify(msg));
  });
};
