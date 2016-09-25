const todoModel = require(__dirname + '/../models/todo');

module.exports = {
  getRandomTodo: (req, res) => {
    todoModel.findOneRandom((err, todo) => {
      const responseObj = {msg: err};
      if(err) res.send(responseObj);
      res.send(todo);
    });
  }
};
