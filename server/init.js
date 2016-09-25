const mg = require('mongoose');
const todoModel = require(__dirname + '/models/todo');

todoModel.find({}, (err, todos) => {
  if(err) console.log('error connecting to todo collection.');
  if(todos.length === 0) {
    todoModel.create({
      action: 'Go grab a bite at',
      venue: 'Burger King'
    });

    todoModel.create({
      action: 'Get a mani pedi at',
      venue: 'Airport Wellness Oasis'
    });

    todoModel.create({
      action: 'Gp visit',
      venue: 'Orchid Garden'
    });
  }
});
