const mg = require('mongoose');
const todoModel = require(__dirname + '/models/todo');
const ticketModel = require(__dirname + '/models/ticket');

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
      action: 'Go visit',
      venue: 'Orchid Garden'
    });
  }
});

ticketModel.find({}, (err, todos) => {
  if(err) console.log('error connecting to ticket collection.');
  if(todos.length === 0) {
    ticketModel.create({
      "ticket_number" : 1,
      "flight_class" : "economy",
      "row" : "15",
      "boarding_time" : new Date("2016-09-24T17:55:10.349+0000"),
      "flight_number" : "3K202",
      "gate" : null,
      "destination" : "SIN",
      "origin" : "CGK",
      "terminal" : 1,
      "bag_tags" : [
        "Kamis"
      ]
    });
  }
});
