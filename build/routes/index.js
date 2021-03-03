"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _todoController = require("../controllers/todoController");

var _validations = require("../middlewares/validations");

var _todoMiddleware = require("../middlewares/todoMiddleware");

var _errorHandler = require("../helpers/errorHandler");

var _errorHandler2 = _interopRequireDefault(_errorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.get('/', (request, response) => {
  response.json({
    info: 'Welcome, Get your todo list done today.'
  });
});
routes.get('/todos', _todoController.getAllTodo);
routes.post('/todos/add', _validations.validateTodo, _validations.validations, _todoController.addTodo);
routes.get('/todos/:id', _todoMiddleware.checkTodoExist, _validations.validations, _todoController.getOneTodo);
routes.put('/todos/:id', _todoMiddleware.checkTodoExist, _validations.validations, (0, _errorHandler2.default)(_todoController.updateTodo));
routes.delete('/todos/:id', _todoMiddleware.checkTodoExist, _validations.validations, (0, _errorHandler2.default)(_todoController.deleteTodo));
exports.default = routes;
//# sourceMappingURL=index.js.map