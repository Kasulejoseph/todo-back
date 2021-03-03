"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkTodoExist = undefined;

var _models = require("../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  todos
} = _models2.default;

const checkTodoExist = exports.checkTodoExist = async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    const todo = await todos.findOne({
      where: {
        id
      }
    });

    if (!todo) {
      throw 'todo not found';
    }

    req.todo = todo;
    next();
  } catch (error) {
    return res.status(404).send({
      message: error
    });
  }
};
//# sourceMappingURL=todoMiddleware.js.map