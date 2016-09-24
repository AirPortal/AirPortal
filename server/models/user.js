const mg = require('mongoose');
const Schema = mg.Schema;

const userSchema = Schema({
  name: String,
  tickets: [{ type: Schema.Types.ObjectId, ref: 'Ticket' }]
}
);

const user = mg.model('User', userSchema);
module.exports = user;
