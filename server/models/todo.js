const mg = require('mongoose');
var random = require('mongoose-simple-random');
const Schema = mg.Schema;

var s = new Schema({
  action: String,
  venue: String
});
s.plugin(random);

const todo = mg.model('Todo', s);

module.exports = todo;
