const mg = require('mongoose');
const todoModel = require(__dirname + '/models/todo');
//
// mg.connection.db.listCollections({name: 'Todo'}).next((err, todo) => {
//   if(!todo) {
//     todoModel.create({
//       action: 'Go grab a bite at',
//       venue: 'Burger King'
//     });
//
//     todoModel.create({
//       action: 'Get a mani pedi at',
//       venue: 'Airport Wellness Oasis'
//     });
//
//     todoModel.create({
//       action: 'Gp visit',
//       venue: 'Orchid Garden'
//     });
//   }
// });
