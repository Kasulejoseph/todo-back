"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validations = exports.validateTodo = undefined;

var _expressValidator = require("express-validator");

const validateTodo = [(0, _expressValidator.check)('category', 'Category is required').not().isEmpty(), (0, _expressValidator.check)('description', 'description is required').not().isEmpty(), (0, _expressValidator.check)('dueDate', 'dueDate feild is required').not().isEmpty()];

const validations = (req, res, next) => {
  const errors = (0, _expressValidator.validationResult)(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 400,
      errors: errors.array()
    });
  }

  next();
};

exports.validateTodo = validateTodo;
exports.validations = validations;
//# sourceMappingURL=validations.js.map