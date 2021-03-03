"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTodo = exports.updateTodo = exports.getAllTodo = exports.getOneTodo = exports.addTodo = undefined;

var _models = require("../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const {
  todos
} = _models2.default;

const addTodo = exports.addTodo = async (req, res) => {
  const {
    category,
    description,
    dueDate
  } = req.body;
  const newTodo = {
    category,
    description,
    dueDate
  };
  const data = await todos.create(newTodo);
  return res.status(201).send({
    status: 201,
    data
  });
};

const getOneTodo = exports.getOneTodo = async (req, res) => {
  const todo = req.todo;
  return res.status(200).send({
    status: 200,
    todo
  });
};

const getAllTodo = exports.getAllTodo = async (req, res) => {
  const data = await todos.findAll({});
  return res.status(200).send({
    status: 200,
    data
  });
};

const updateTodo = exports.updateTodo = async (req, res) => {
  const {
    id
  } = req.todo;
  const dataToUpdate = req.body;

  const newTodo = _objectSpread({}, dataToUpdate);

  const [updatedTodo] = await todos.update(newTodo, {
    where: {
      id
    },
    returning: true
  });

  if (updatedTodo == 0) {
    return res.status(400).send({
      status: 400,
      message: "No field was updated"
    });
  }

  return res.status(200).send({
    status: 200,
    message: "Successfully updated"
  });
};

const deleteTodo = exports.deleteTodo = async (req, res) => {
  const {
    id
  } = req.todo;
  await todos.destroy({
    where: {
      id
    }
  });
  return res.status(200).send({
    status: 200,
    message: "Todo has been successfully deleted"
  });
};
//# sourceMappingURL=todoController.js.map