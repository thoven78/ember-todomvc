module.exports = function(app) {
  var express = require('express');
  var todosRouter = express.Router();

  var todos = [
    {
        id: 1,
        title: 'Learn Ember.js',
        isCompleted: true
    },
    {
        id: 2,
        title: 'Get better at Ember.js',
        isCompleted: false
    },
    {
        id: 3,
        title: 'Profit!',
        isCompleted: false
    }
  ];

  todosRouter.get('/', function(req, res) {
    res.send({
      'todos': todos
    });
  });

  todosRouter.post('/', function(req, res) {
    res.status(201).json(req.body.todo);
  });

  todosRouter.get('/:id', function(req, res) {
    res.send({
      'todos': {
        id: req.params.id
      }
    });
  });

  todosRouter.put('/:id', function(req, res) {
    res.send({
      'todos': {
        id: req.params.id
      }
    });
  });

  todosRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/todos', todosRouter);
};
