const express = require('express');
const router = express.Router();

const TodoController = require('../Controllers/TodoController');

router.get('/', TodoController.getAllTodo);
router.post('/', TodoController.storeTodo);
router.put('/:id', TodoController.updateTodo);
router.get('/:id', TodoController.showTodo);
router.delete('/:id', TodoController.deleteTodo);

module.exports = (router);