import { check, validationResult } from 'express-validator';


const validateTodo = [
  check('category', 'Category is required')
    .not()
    .isEmpty(),
  check('description', 'description is required')
    .not()
    .isEmpty(),
  check('dueDate', 'dueDate feild is required')
    .not()
    .isEmpty()
];

const validations = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ status: 400, errors: errors.array() });
  }
  next();
};


export { validateTodo, validations }
